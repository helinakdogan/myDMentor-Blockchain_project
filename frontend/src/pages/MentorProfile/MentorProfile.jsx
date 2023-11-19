import { Button } from "@mui/material";
import React from "react";

const MentorProfile = () => {
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