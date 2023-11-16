import '@/styles/globals.css';
import { siweClient } from '@/utils/siweClient';
import { ConnectKitProvider, SIWESession, getDefaultConfig } from 'connectkit';
import type { AppProps } from 'next/app';
import { WagmiConfig, createConfig } from 'wagmi';
import Headers from '../component/Header'
import Footer from '../component/Footer'
const config = createConfig(
  getDefaultConfig({
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
