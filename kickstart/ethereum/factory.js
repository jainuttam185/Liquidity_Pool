import web3 from "./web3";
import Pool from "./build/Pool.json";
 
const instance = new web3.eth.Contract(
  Pool.abi,
  "0x6EfDB9f4B7A48fB0017DBB6596acDa4B60005e29"
);
 
export default instance;