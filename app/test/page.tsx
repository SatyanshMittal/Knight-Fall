//@ts-nocheck
// "use client"
import React from "react";
// import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import {CharacterOne} from "@/components/character1"
import HeroCharacters from "@/components/HeroCharacters";


export default function Page() {
    // const {connectedWallet} = useWallet();
    // if (connectedWallet) {
    //     const address = connectedWallet.address;
    //     console.log("Connected wallet address:", address);
    //     // Use the address for your application logic
    //   } else {
    //     console.log("No wallet connected");
    //   }
  return (
    <div>
        {/* <WalletSelector /> */}
        <CharacterOne/>
        <HeroCharacters/>
    </div>
  );
}
