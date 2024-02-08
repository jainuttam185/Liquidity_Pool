import React,{Component} from "react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
import styles from "./index.module.css";

class CampaignIndex extends Component{
    state = {token:""};
    
    onSubmit=async (event)=>{
        event.preventDefault();

        const accounts=await web3.eth.getAccounts();
        await factory.methods.swap("0x21408DbA4e1974AC1dDB426630fe94bf6c4c66c7",this.state.token)
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
    <div className={styles.top}>
      <div className={styles.box}>
        <input
          type="number"
          className={styles.input1}
          placeholder="0"
          value={this.state.token}
          onChange={event => this.setState({token:event.target.value})}
        />
        <div className={styles.buttondiv}>
          <input
            type="number"
            className={styles.input2}
            placeholder="0"
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

