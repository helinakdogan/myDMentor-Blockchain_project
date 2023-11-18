import { WorldIDWidget } from "@worldcoin/id";
import { useAccount, useConnect } from "wagmi";
import { Chat } from "@pushprotocol/uiweb";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";

const Home = () => {
  const { address } = useAccount();

  useEffect(() => {
    console.log(address);
  }, [address]);
  console.log(address);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  return (
    <>
      
        
        <button onClick={() => connect()}>Connect Wallet</button>
        <Chat
          account={address} //user address
          supportAddress="" //support address
          apiKey="" //todo
          env="staging"
        />
      
    </>
  );
};

export default Home;
