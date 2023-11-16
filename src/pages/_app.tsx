import '@/styles/globals.css';
import { siweClient } from '@/utils/siweClient';
import { ConnectKitProvider,  getDefaultConfig } from 'connectkit';
import type { AppProps } from 'next/app';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

import { mainnet, polygon, optimism } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
 
export const horizen = {
  id: 7332,
  name: 'Horizen',
  network: 'horizen',
  nativeCurrency: {
    decimals: 18,
    name: 'Horizen',
    symbol: 'ZEN',
  },
  rpcUrls: {
    public: { http: ['https://rpc.ankr.com/horizen_eon'] },
    default: { http: ['https://rpc.ankr.com/horizen_eon'] },
  },
  blockExplorers: {
    etherscan: { name: 'Horizen', url: 'https://eon-explorer.horizenlabs.io/' },
    default: { name: 'Horizen', url: 'https://eon-explorer.horizenlabs.io/' },
  },
 
} 

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, horizen],
  [publicProvider()],

)


const config = createConfig(

  getDefaultConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    appName: 'My ConnectKit App',
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <siweClient.Provider
  // Optional parameters
  enabled={true} // defaults true
  nonceRefetchInterval={600000} // in milliseconds, defaults to 5 minutes
  sessionRefetchInterval={600000}// in milliseconds, defaults to 5 minutes
  signOutOnDisconnect={true} // defaults true
  signOutOnAccountChange={true} // defaults true
  signOutOnNetworkChange={false} // defaults true
 
 
>
        <ConnectKitProvider>
       
          <Component {...pageProps} />
         
        </ConnectKitProvider>
      </siweClient.Provider>
    </WagmiConfig>
  );
}
