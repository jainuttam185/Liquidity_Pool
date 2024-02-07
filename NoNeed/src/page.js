"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import LiquidityPool from "./artifacts/contracts/Liquidity.sol/LiquidityPool.json";

export default function Home() {
  // const [RBNT, setRBNT] = useState("");
  // const [SHUBH, setSHUBH] = useState("");
  const [token, setToken] = useState({ RBNT: "", SHUBH: "" });
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wallet = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);
        // const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        // const contractAddress = "0x31e034c027904c4EBB7eaf4C6A5161b8fd7A3089";
        const contractAddress = "0x8839C1d1CA00B0D1d4B97b31A61f78292d36F262";
        const contract = new ethers.Contract(
          contractAddress,
          LiquidityPool.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(signer);
      } else {
        alert("Metamask is not installed.");
      }
    };

    provider && wallet();
  }, []);

  const handleRBNTChange = (e) => {
    setToken((prev) => ({
      ...prev,
      RBNT: e.target.value,
      SHUBH: (ethers.utils.formatEther(e.target.value) * 997) / 1000,
    }));
  };

  const swap = async () => {
    // await contract.RBNT.approve(contract, token.RBNT);
    const sep_provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_TESTNET_RPC_URL);
    console.log(sep_provider);
    await contract.exchange(token.RBNT);
  }

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <input
          type="number"
          className={styles.input1}
          placeholder="0 RBNT"
          value={token.RBNT}
          onChange={handleRBNTChange}
        />
        <div className={styles.buttondiv}>
          <input
            type="number"
            className={styles.input2}
            placeholder="0 SHUBH"
            value={token.SHUBH}
            readOnly
          />
          <button className={styles.button} onClick={swap}>Swap</button>
        </div>
      </div>
    </main>
  );
}
