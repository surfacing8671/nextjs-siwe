import { ethereumProvider } from "./const.mjs";
import { maticProvider } from "./const.mjs";
import { arbitrumProvider } from "./const.mjs";
import { horizonProvider } from "./const.mjs";
import { walletAddress } from "./const.mjs";
import { avaxProvider } from "./const.mjs";
import { ethers } from "ethers";

export async function checkAvax() {
  try {
    // const provider = new ethers.JsonRpcProvider(avaxProvider);
    const balance = await avaxProvider.getBalance(walletAddress);
    return balance;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

export async function checkHorizon() {
  try {
    // const provider = new ethers.JsonRpcProvider(horizonProvider);
    const balance = await horizonProvider.getBalance(walletAddress);
    return balance;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

export async function checkEth() {
  try {
    // const provider = new ethers.JsonRpcProvider(ethereumProvider);
    const balance = await ethereumProvider.getBalance(walletAddress);
    return balance;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

export async function checkMatic() {
  try {
    // const provider = new ethers.JsonRpcProvider(maticProvider);
    const balance = await maticProvider.getBalance(walletAddress);
    return balance;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

export async function checkArb() {
  try {
    // const provider = new ethers.JsonRpcProvider(arbitrumProvider);
    const balance = await arbitrumProvider.getBalance(walletAddress);
    return balance;
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}
