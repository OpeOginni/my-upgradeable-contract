require("@nomiclabs/hardhat-etherscan");

async function verify() {
  await hre.run("verify:verify", {
    address: "0x284cecC2b35097f8e5f5fB6FF79b92B248aCbbeA", // Put in the address of your deployed contract...Not proxie
  });
}

verify();
