import { Button, rgbToHex } from "@mui/material";
import React, { useState } from "react";
import myDMentorAbi from "../../abi/myDMentorAbi.json";
import Web3 from "web3"; // Import Web3 library

const MentorProfile = () => {
  const [accounts, setAccounts] = useState([]);
  
  const handleButtonClick = async () => {
    try {
      // Enable Ethereum and get accounts
      const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(acc);

      // Create a Web3 instance
      const web3 = new Web3(window.ethereum);

      // Contract address and ABI
      const contractAddress = '0x1E42a61f416A6aa14a20Efd32E454788021f8A10'; 
      const contractAbi = myDMentorAbi;

      // Create a contract instance
      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      // Call sendToPool function
      const txHash = await contract.methods.sendToPool(acc[0]).send({
        from: acc[0],
        value: web3.utils.toWei('0.00000015', 'ether'), // Replace with the desired value in ether
      });

      console.log(txHash);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "40px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://www.peerthroughmedia.com/wp-content/uploads/2021/09/APE.png"
        alt="Mentor"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <div style={{ margin: "10px" }}>
        <h1 style={{ fontSize: '28px' }}>Mert Altunakar</h1>
      </div>
      <p>
        Hello, it’s Mert from WallStreet, a seasoned consultant specializing in
        investment in cryptocurrencies. I assist businesses in areas such as the
        blockchain industry, leadership development, and performance management
        to drive transformative change. Previously, my company achieved a 20%
        expansion by my mentorship. Now, I have decided to be more beneficial for
        the mentees who need a professional guide.
      </p>
      <div style={{ margin: "10px" }}></div>
      <h1 style={{ fontSize: '24px' }}>Options</h1>
      <div style={{ margin: "5px" }}></div>
      <Button
        variant="outlined"
        style={{
          width: "100%",
          marginRight: 10,
          backgroundImage: "linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)",
          color: "white"
        }}
        onClick={handleButtonClick}
      >
        Video Technical Analysis (0.015 ETH)

      </Button>
      <div style={{ margin: "3px" }}></div>
      <Button
        variant="outlined"
        style={{
          width: "100%",
          marginRight: 10,
          backgroundImage: "linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)",
          color: "white"
        }}
      >
        
        Written Technical Analysis (0.01 ETH)
      </Button>
      <div style={{ margin: "10px" }}></div>
    </div>
  );
};

export default MentorProfile;
