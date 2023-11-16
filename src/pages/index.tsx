import { ConnectKitButton, SIWEButton, SIWEConfig, SIWESession, useSIWE } from 'connectkit';
import Headers from '../component/Header'
import Footer from '../component/Footer'
import React from 'react';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';
import {siweClient} from '../utils/siweClient'
import { SiweMessage } from 'siwe'
import Link from 'next/link';

 


export default function Home() {

  const { data, isSignedIn, signOut, signIn, status } = useSIWE();
console.log(siweClient)



  
  return (
    <><Headers /> <div className='text-center text-5xl mt-6 text-white'>Horizen Gas Relayer</div><div></div><div className='text-center text-4xl flex flex-row flex-wrap pl-28 pr-28 mt-44 -mb-40 text-white'>To transact and obtain your initial gas token on Horizen, you must sign in with Ethereum first to continue</div>
     <div className='flex flex-col justify-center self-center items-center content-center'> <div className='text-3xl -mt-10 -pt-10'>
    <SIWEButton/>
    </div></div><div className="flex flex-col items-center justify-center min-h-screen py-1">

    <Link href={"/relay"}><button className='border-solid border border-black p-6 bg-white rounded-lg -mt-80 text-4xl'>Transaction Page</button></Link>
                  
    </div><Footer /></>
  );
                  
}
