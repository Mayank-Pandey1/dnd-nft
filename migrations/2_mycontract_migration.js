const DungeonsAndDragonsCharacter = artifacts.require(
  "DungeonsAndDragonsCharacter"
);
const { LinkToken } = require("@chainlink/contracts/truffle/v0.4/LinkToken");
const SEPOLIA_VRF_COORDINATOR = "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625";
const SEPOLIA_LINKTOKEN = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const SEPOLIA_KEYHASH =
  "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c";

module.exports = async (deployer, network, [defaultAccount]) => {
  // hard coded for rinkeby
  LinkToken.setProvider(deployer.provider);
  DungeonsAndDragonsCharacter.setProvider(deployer.provider);
  if (network.startsWith("sepolia")) {
    await deployer.deploy(
      DungeonsAndDragonsCharacter,
      SEPOLIA_VRF_COORDINATOR,
      SEPOLIA_LINKTOKEN,
      SEPOLIA_KEYHASH
    );
    let dnd = await DungeonsAndDragonsCharacter.deployed();
  } else if (network.startsWith("mainnet")) {
    console.log(
      "If you're interested in early access to Chainlink VRF on mainnet, please email vrf@chain.link"
    );
  } else {
    console.log(
      "Right now only sepolia works! Please change your network to Sepolia"
    );
    // await deployer.deploy(DungeonsAndDragonsCharacter)
    // let dnd = await DungeonsAndDragonsCharacter.deployed()
  }
};
