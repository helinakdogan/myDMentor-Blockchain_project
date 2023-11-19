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

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "70%", // Adjust the width as needed
          margin: "0 auto", // Center the container horizontally
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* First Half: Text */}
        <div
          style={{
            gridColumn: "1",
            fontSize: "20px",
            color: "pink", // Change text color to pink
            padding: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <p style={{ fontStyle: "italic", lineHeight: "1.5", color: "#385170" }}>
            myDMentor leverages blockchain technology to ensure secure,
            efficient and transparent payment processes, addressing one of the
            most significant pain points in the mentor and mentee payment
            journey.
          </p>
        </div>

        {/* Second Half: Image */}
        <div style={{ gridColumn: "2" }}>
          <img
            src="https://img.imgyukle.com/2023/11/19/yuJo4U.png"
            alt="Image 2"
            style={{ width: "100%", maxWidth: "300px" }}
          />
        </div>
      </div>

      <Chat
        account={address}
        supportAddress=""
        apiKey=""
        env="staging"
      />
    </div>
  );
};

export default Home;
