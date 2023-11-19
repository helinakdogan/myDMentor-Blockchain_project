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

  const containerStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    height: "100vh", // Adjust as needed
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none", // Remove the border
    justifySelf: "center", // Center-align content in the column
  };

  const imgStyle = {
    maxWidth: "100%", // Set the maximum width to 100%
    height: "auto", // Maintain the aspect ratio
  };

  const chatStyle = {
    ...itemStyle,
    gridRow: "span 2",
    gridColumn: "span 2",
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...itemStyle, gridRow: 1, gridColumn: 1, padding: '10px', fontSize: '28px', fontStyle: 'italic', marginLeft: '120px', color:"dimgray" }}>
    myDMentor leverages blockchain technology to ensure secure, efficient and transparent payment processes, addressing one of the most significant pain points in the mentor and mentee payment journey.
</div>

      <div style={{ ...itemStyle, gridRow: 1, gridColumn: 2 }}>
        <img src="https://img.imgyukle.com/2023/11/19/yuJo4U.png" style={imgStyle} />
      </div>

      <div style={{ ...itemStyle, gridRow: 2, gridColumn: "span 2", marginTop:'130px', padding:'50px' }}>
        <img src="https://img.imgyukle.com/2023/11/19/yuJVhA.jpeg " style={imgStyle} />
      </div>
      <div style={chatStyle}>
        <Chat account={address} supportAddress="" apiKey="" env="staging" />
      </div>
    </div>
  );
};

export default Home;
