const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x6A95E215E5E0311d3B7340188ABA160E9B089d7f";

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory("VendingMachineV3");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + (await upgraded.owner()));
  console.log("Implementation contract address: " + implementationAddress);
}

main();
