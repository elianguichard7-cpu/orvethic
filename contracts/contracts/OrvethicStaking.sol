// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract OrvethicStaking is Ownable, ReentrancyGuard, Pausable {
    using SafeERC20 for IERC20;

    IERC20 public immutable stakingToken;

    uint256 public rewardRate;
    uint256 public periodFinish;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    uint256 public totalSupply;
    mapping(address => uint256) public flexibleBalances;
    mapping(address => uint256) public lockedBalances;
    mapping(address => uint256) public lockExpiry;

    uint256 public lockBonusBps = 200;
    uint256 public minStakeAmount = 100 * 10 ** 18;

    event Staked(address indexed user, uint256 amount, uint256 lockDays);
    event Unstaked(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
    event RewardAdded(uint256 reward, uint256 duration);

    constructor(address _stakingToken, address _owner) Ownable(_owner) {
        require(_stakingToken != address(0), "Staking: zero token address");
        stakingToken = IERC20(_stakingToken);
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = lastTimeRewardApplicable();
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    function lastTimeRewardApplicable() public view returns (uint256) {
        return block.timestamp < periodFinish ? block.timestamp : periodFinish;
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalSupply == 0) return rewardPerTokenStored;
        return rewardPerTokenStored +
            ((lastTimeRewardApplicable() - lastUpdateTime) * rewardRate * 1e18) / totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return flexibleBalances[account] + lockedBalances[account];
    }

    function earned(address account) public view returns (uint256) {
        uint256 baseEarned = (balanceOf(account) *
            (rewardPerToken() - userRewardPerTokenPaid[account])) /
            1e18 + rewards[account];
        uint256 locked = lockedBalances[account];
        if (locked > 0 && lockExpiry[account] > block.timestamp) {
            uint256 total = balanceOf(account);
            uint256 bonusPortion = (baseEarned * locked) / total;
            uint256 bonus = (bonusPortion * lockBonusBps) / 10_000;
            return baseEarned + bonus;
        }
        return baseEarned;
    }

    function stake(uint256 amount, uint256 lockDays)
        external nonReentrant whenNotPaused updateReward(msg.sender)
    {
        require(amount >= minStakeAmount, "Staking: below minimum");
        require(lockDays == 0 || lockDays == 90, "Staking: invalid lock");
        if (lockDays == 90) {
            require(lockedBalances[msg.sender] == 0, "Staking: already locked");
            lockedBalances[msg.sender] += amount;
            lockExpiry[msg.sender] = block.timestamp + 90 days;
        } else {
            flexibleBalances[msg.sender] += amount;
        }
        totalSupply += amount;
        stakingToken.safeTransferFrom(msg.sender, address(this), amount);
        emit Staked(msg.sender, amount, lockDays);
    }

    function unstake(uint256 amount, bool locked)
        external nonReentrant updateReward(msg.sender)
    {
        require(amount > 0, "Staking: zero amount");
        if (locked) {
            require(block.timestamp >= lockExpiry[msg.sender], "Staking: still locked");
            require(lockedBalances[msg.sender] >= amount, "Staking: insufficient");
            lockedBalances[msg.sender] -= amount;
            if (lockedBalances[msg.sender] == 0) lockExpiry[msg.sender] = 0;
        } else {
            require(flexibleBalances[msg.sender] >= amount, "Staking: insufficient");
            flexibleBalances[msg.sender] -= amount;
        }
        totalSupply -= amount;
        stakingToken.safeTransfer(msg.sender, amount);
        emit Unstaked(msg.sender, amount);
    }

    function claimRewards() external nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "Staking: no rewards");
        rewards[msg.sender] = 0;
        stakingToken.safeTransfer(msg.sender, reward);
        emit RewardPaid(msg.sender, reward);
    }

    function notifyRewardAmount(uint256 reward, uint256 duration)
        external onlyOwner updateReward(address(0))
    {
        require(reward > 0 && duration > 0, "Staking: invalid params");
        if (block.timestamp >= periodFinish) {
            rewardRate = reward / duration;
        } else {
            uint256 remaining = periodFinish - block.timestamp;
            uint256 leftover = remaining * rewardRate;
            rewardRate = (reward + leftover) / duration;
        }
        lastUpdateTime = block.timestamp;
        periodFinish = block.timestamp + duration;
        emit RewardAdded(reward, duration);
    }

    function pause() external onlyOwner { _pause(); }
    function unpause() external onlyOwner { _unpause(); }
}