const hre = require("hardhat");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
  if (!privateKey) throw new Error("DEPLOYER_PRIVATE_KEY not found in .env");

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  console.log("\n[1/2] Deploying OrvethicToken...");
  const Token = await hre.ethers.getContractFactory("OrvethicToken");
  const token = await Token.deploy(deployer.address);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("✅ ORVX Token:", tokenAddress);

  console.log("\n[2/2] Deploying OrvethicStaking...");
  const Staking = await hre.ethers.getContractFactory("OrvethicStaking");
  const staking = await Staking.deploy(tokenAddress, deployer.address);
  await staking.waitForDeployment();
  const stakingAddress = await staking.getAddress();
  console.log("✅ Staking:", stakingAddress);

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("ORVX Token :", tokenAddress);
  console.log("Staking    :", stakingAddress);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("\nUpdate your .env.local with these addresses!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});