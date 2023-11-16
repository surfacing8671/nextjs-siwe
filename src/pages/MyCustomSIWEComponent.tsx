import { siweServer } from "@/utils/siweServer";
import SIWEContext, { useSIWE, useModal, SIWEButton, SIWESession }  from "connectkit";
import { useAccount } from "wagmi";


const CustomSIWEButton = () => {
  const { setOpen } = useModal();
  const { isConnected } = useAccount();

  const { data, isReady, isRejected, isLoading, isSignedIn, signOut, signIn } = useSIWE({
    onSignIn: (session?: SIWESession) => {
      // Do something with the data
      console.log(SIWEContext)
    },
    onSignOut: () => {
      // Do something when signed out
    },
  });

  const handleSignIn = async () => {
    await signIn()?.then((session?: SIWESession) => {
        
        sessionStorage.key(1)
        console.log(sessionStorage.key(0))
      // Do something when signed in
    });
  };

  const handleSignOut = async () => {
    await signOut()?.then(() => {
      // Do something when signed out
    });
  };

  /** Wallet is connected and signed in */
  if (isSignedIn) {
    return (
      <>
        <div>Address: {data?.address}</div>
        <div>ChainId: {data?.chainId}</div>
        <button onClick={handleSignOut}>Sign Out</button>
      </>
    );
  }

  /** Wallet is connected, but not signed in */
  if (isConnected) {
    return (
      <>
     
        <button onClick={handleSignIn} disabled={isLoading}>
          {isRejected // User Rejected
            ? "Try Again"
            : isLoading // Waiting for signing request
            ? "Awaiting request..."
            : // Waiting for interaction
              "Sign In"}
        </button>
      </>
    );
  }

  /** A wallet needs to be connected first */
  return (
    <>
      <button onClick={() => setOpen(true)}>Connect Wallet</button>
    </>
  );
};

export default CustomSIWEButton;