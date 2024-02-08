import web3 from "./web3";
import Pool from "./build/Pool.json";
 
const instance = new web3.eth.Contract(
  Pool.abi,
  "0x3ec0112255f7e439603923a513208a891829c72d"
);
 
export default instance;