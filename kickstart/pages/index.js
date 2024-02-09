import React,{Component} from "react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
import styles from "./index.module.css";

class CampaignIndex extends Component{
    state = {token:"", outputValue: "",reserveIn:0,reserveOut:0 };

    async componentDidMount() {
      this.setState({
        reserveIn: await factory.methods.reserve0().call()
      });
      this.setState({
        reserveOut: await factory.methods.reserve1().call()
      });
      this.setState.reserveOut= await factory.methods.reserve1().call();
        console.log("line1",parseInt(this.state.reserveIn));
        console.log("line2",parseInt(this.state.reserveOut));
    }
    
    onSubmit=async (event)=>{
        event.preventDefault();

        const accounts=await web3.eth.getAccounts();
        await factory.methods.swap("0x8CCfAc6cDe3900033ECb721d94ee71596533cDC7",this.state.token)
        .send({
            from : accounts[0]
        });
   };

   

   /* static async getIntialProps(){

       onSubmit=async (event)=>{
            event.preventDefault();

            const accounts=await web3.eth.getAccounts();
            await factory.methods.swap(this.state.token)
            .send({
                from : accounts[0]
            });
       };
    }*/
    render(){
        return (
    <div className={styles.full}>
      <div className={styles.header}><h2 className={styles.header2}>UTTAM SWAP</h2></div>
    <div className={styles.top}>
      <div className={styles.box}>
      <div className={styles.token1}>Token 2</div>
        <input
          type="number"
          className={styles.input1}
          placeholder="0"
          value={this.state.token}
          onChange={event => this.setState({token:event.target.value,outputValue: 
          this.state.reserveOut*event.target.value*1.13/this.state.reserveIn
        })}
        />
        {console.log("hi")}
        {console.log("render",this.state.reserveIn,this.state.reserveOut)}
        <div className={styles.token1}>Token 1</div>
        <div className={styles.buttondiv}>
          <input
            type="number"
            className={styles.input2}
            placeholder="0"
            value={this.state.outputValue}
            readOnly
          />
          <div>
          <button className={styles.button} onClick={this.onSubmit}>Swap</button>
          </div>
        </div>
      </div>
    </div>
    </div>
        );
    }
}

export default CampaignIndex;

