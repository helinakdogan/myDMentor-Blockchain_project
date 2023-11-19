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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            gridColumn: "1 / span 3",
            fontSize: "20px",
            color: "purple",
            padding: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <p style={{ fontStyle: "italic", lineHeight: "1.5", color: "black" }}>
            myDMentor leverages blockchain technology to ensure secure,
            efficient and transparent payment processes, addressing one of the
            most significant pain points in the mentor and mentee payment
            journey.
          </p>
        </div>

       

        {/* Second Section: Image */}
        <div style={{ gridColumn: "3" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9750/9750907.png"
            alt="Image 2"
            style={{ width: "100%" }}
          />
        </div>
      </div>

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
