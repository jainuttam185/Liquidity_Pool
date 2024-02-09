const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3  = require("web3");
const compiled = require("./build/Pool.json");
 
const provider = new HDWalletProvider(
  "twin sadness history antique orient smooth couch curve coil saddle pitch royal",
  "https://sepolia.infura.io/v3/edb2497457c34b1cb4aca5142cc26743"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  try{
  const accounts = await web3.eth.getAccounts();
  const constructorArguments = ["0x9a5490c9d4e23f7889f0436f1f194c47E45836Fb", "0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7"];
 
  console.log("Attempting to deploy from account", accounts[0]);
 //console.log(compiled.Pool);
  const result = await new web3.eth.Contract(compiled.abi)
    .deploy({ data: compiled.evm.bytecode.object ,arguments: constructorArguments})
    .send({ gas: "1400000", from: accounts[0] });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();} catch(error){
      console.log(error);
      console.log("hi");
  }
};
deploy();