// @ts-nocheck
"use client";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";


const wallets = [new PetraWallet()];


export const AptosProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>{children}</AptosWalletAdapterProvider>;
};  