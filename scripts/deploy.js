const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata
  // const metadataURL = "ipfs://.../";

  let signers = await ethers.getSigners()
  let user0 = signers[0].address
  const provider = waffle.provider;
  
  const user0balanceETH = await provider.getBalance(user0);
  console.log(user0, ethers.utils.formatEther(user0balanceETH))

  // return

  const _bank = "0xc839E118d37CFEF20fc6f439F50ee3B3a7656F6f"
  const _baseToken = "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"

  const CONTRACT_object = await ethers.getContractFactory("TheOpenFarmController");
  const deployedContract = await CONTRACT_object.deploy(_bank, _baseToken);
  await deployedContract.deployed();
  console.log("Contract: Farm Controller | Address:", deployedContract.address);
  // let init_hash = await deployedContract.INIT_CODE_PAIR_HASH()
  // console.log("init_hash:", init_hash);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
