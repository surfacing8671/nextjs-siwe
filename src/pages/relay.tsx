import type { GetServerSideProps, NextPage } from "next";
import { siweServer } from "@/utils/siweServer";
import { ethers } from "ethers";
import { useAccount, useNetwork } from 'wagmi'
import { getAccount } from '@wagmi/core'
import Headers from '../component/Header'
import Footer from '../component/Footer'
import Link from "next/link";

async function signIn(){



}


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { address, nonce, chainId } = await siweServer.getSession(req, res);
  const account = getAccount()

  if (!address || account.isConnected) {
    return {

      redirect: {
        permanent: false,
        destination: '/', // Redirect if wallet does not have the required token
      },
    };
  }


  return {
    props: {nonce},
  };
};

const CollectorsOnlyPage: NextPage = (props) => {
  const { chain, chains } = useNetwork()

  
  console.log(props)
  return (<>
  <Headers />
  <div className=' text-white text-center mt-4 -mb-56 mb-6 text-3xl font-bold'> {chain && <div>Connected to {chain.name}</div>}
      </div>
  <div className='text-center text-white  mt-40 -mb-56 text-3xl font-bold'>Input Amount</div><div className='inputBlock content-center flex flex-row self-center justify-items-center justify-self-center '>

    <input
    placeholder="Amount"
    className=" placeholder:text-center placeholder:text-red-500  input"

      type="withdraw"

      onChange={() => {
      } } /></div>
      
      <div className='text-center text-white mt-10 h-[10em] text-3xl font-bold'>Expected Output Amount</div>
      <div className='flex flex-row justify-center '>
      <Link href={"/relay"}><button className='border-solid border border-black p-6 bg-white rounded-lg  text-sm h-[4rem] -mt-[8em] mb-[2em]'>Send</button></Link></div>
                  
     
                  
      <Footer/></>
    
    );
};

export default CollectorsOnlyPage;