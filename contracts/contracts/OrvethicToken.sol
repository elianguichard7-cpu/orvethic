// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OrvethicToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable {
    uint256 public constant MAX_SUPPLY = 500_000_000 * 10 ** 18;

    event TokensPaused(address indexed by);
    event TokensUnpaused(address indexed by);

    constructor(address treasury)
        ERC20("Orvethic", "ORVX")
        Ownable(treasury)
    {
        require(treasury != address(0), "ORVX: zero address treasury");
        _mint(treasury, MAX_SUPPLY);
    }

    function pause() external onlyOwner {
        _pause();
        emit TokensPaused(msg.sender);
    }

    function unpause() external onlyOwner {
        _unpause();
        emit TokensUnpaused(msg.sender);
    }

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}