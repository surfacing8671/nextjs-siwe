
import { ethers } from "ethers";



export const WssavaxProvider = "wss://avalanche-c-chain.publicnode.com"
export const WssarbitrumProvider = "wss://arbitrum-one.publicnode.com"
export const WssethereumProvider = "wss://mainnet.gateway.tenderly.co"
//export const WsshorizonProvider = "https://rpc.ankr.com/horizen_eon"
export const WssmaticProvider = "wss://polygon-bor.publicnode.com"

export const avaxProviderrpc = "https://rpc.ankr.com/avalanche"
export const arbitrumProviderrpc = "https://arbitrum.llamarpc.com"
export const ethereumProviderrpc = "https://ethereum.publicnode.com"
export const horizonProviderrpc = "https://rpc.ankr.com/horizen_eon"
export const maticProviderrpc = "https://rpc.ankr.com/polygon"
export const avaxProvider = new ethers.providers.JsonRpcProvider(avaxProviderrpc)
export const arbitrumProvider = new ethers.providers.JsonRpcProvider(arbitrumProviderrpc)
export const ethereumProvider = new ethers.providers.JsonRpcProvider(ethereumProviderrpc)
export const horizonProvider = new ethers.providers.JsonRpcProvider(horizonProviderrpc)
export const maticProvider = new ethers.providers.JsonRpcProvider(maticProviderrpc)



export const walletAddress = '0x74CFe53F98a76c68C0f233ec8dDBD2B7F6EDEf27';
export const chainId = 
    [1, 137, 42161, 43114, 7332]


export const WMATIC = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
export const WAVAX = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
export const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const AWETH = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
export const ARB = "0x912CE59144191C1204E64559FE8253a0e49E6548"
