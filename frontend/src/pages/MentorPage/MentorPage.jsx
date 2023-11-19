import { useState } from "react";
import Web3 from "web3";
import myDMentorAbi from "../../abi/myDMentorAbi"
import "./mentorPage.css";

import {
  Button,
  TextField,
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const MentorPage = ({ currentAccount }) => {
  const [gigVisible, setGigVisible] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(
    myDMentorAbi,
    "0x7d9EdC965Aba61A4Ceadb224eA1adA351fAF8380"
  );
  const stakeClientAmount = async (value) => {
    console.log(value);
    try {
      await contract.methods
        .stake()
        .send({ from: currentAccount, value: value });
    } catch (error) {
      console.log(error);
    }
  };
  const approve = async (hash) => {
    try {
      const ogImageCID = await contract.methods
        .verifyProof(
          "d04b98f48e8f8bcc15c6ae5ac050801cd6dcfd428fb5f9e65c4e16e7807340fa"
        )
        .send({ from: currentAccount });
      console.log(ogImageCID);
      return ogImageCID;
    } catch (error) {
      console.log(error);
    }
    return null;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Container>
        <div className="client-container">
          <Typography variant="h2"> Find your mentor !</Typography>
          <div style={{ margin: "20px" }}></div>

          <TextField
            type="text"
            placeholder="Search for mentors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: "300px", height: "10px" }}
          />
          <div style={{ margin: "70px" }}></div>
          <div className="progress-container" style={{ display: "flex" }}>
            <Card
              style={{
                width: 300,
                marginRight: "10px",
                backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
                borderRadius: "25px",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://www.peerthroughmedia.com/wp-content/uploads/2021/09/APE.png"
                  alt="Mentor"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div>
                <CardHeader
                  title="Mert Altunakar"
                  style={{ color: "white" }}
                ></CardHeader>
              </div>
              <CardContent>
                <Typography
                  variant="body1"
                  className="progress-card-description"
                  style={{ color: "white" }}
                >
                  Professional Crypto Trader
                </Typography>
                <div style={{ margin: "30px" }}></div>
                
                <Button
                  variant="contained"
                  onClick={handleDialogOpen}
                  style={{
                    marginLeft: "100px",
                    marginTop: "10px",
                    backgroundColor: "#49beb7",
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>

            <div style={{ margin: "10px" }}></div>

            <Card
              style={{
                width: 300,
                marginRight: "10px",
                backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
                borderRadius: "25px",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://i.seadn.io/gcs/files/2866d3bbe71b43067f7d3ce564d08d3a.png?auto=format&dpr=1&w=3840://www.peerthroughmedia.com/wp-content/uploads/2021/09/APE.png"
                  alt="Mentor"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div>
                <CardHeader
                  title="Mentor Y"
                  style={{ color: "white" }}
                ></CardHeader>
              </div>
              <CardContent>
                <Typography
                  variant="body1"
                  className="progress-card-description"
                  style={{ color: "white" }}
                >
                  Professional NFT Trader
                </Typography>
                <div style={{ margin: "30px" }}></div>
                <Button
                  variant="contained"
                  onClick={handleDialogOpen}
                  style={{
                    marginLeft: "100px",
                    marginTop: "10px",
                    backgroundColor: "#49beb7",
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>

            <div style={{ margin: "10px" }}></div>
            <Card
              style={{
                width: 300,
                marginRight: "10px",
                backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
                borderRadius: "25px",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://www.djkn.kemenkeu.go.id/files/images/2022/01/111.PNG"
                  alt="Mentor"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div>
                <CardHeader
                  title="Mentor Z"
                  style={{ color: "white" }}
                ></CardHeader>
              </div>
              <CardContent>
                <Typography
                  variant="body1"
                  className="progress-card-description"
                  style={{ color: "white" }}
                >
                  Graphic Designer
                </Typography>
                <div style={{ margin: "30px" }}></div>
                <Button
                  variant="contained"
                  onClick={handleDialogOpen}
                  style={{
                    marginLeft: "100px",
                    marginTop: "10px",
                    backgroundColor: "#49beb7",
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        
      </Container>

      <Dialog open={openDialog} onClose={handleDialogClose}>
  <DialogTitle>Mert Altunakar</DialogTitle>
  <DialogContent>
    

  <div style={{ height: '20%', overflow: 'hidden' }}>
      <img
        src="https://www.peerthroughmedia.com/wp-content/uploads/2021/09/APE.png"
        alt="Mentor"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>

    <div style={{ margin: "10px" }}></div>

    <Typography variant="body1">
      Welcome to Mentor X's profile! I am a passionate mentor with expertise
      in various fields. Let me help you achieve your goals and overcome
      challenges.
    </Typography>

    <Typography variant="h6" style={{ marginTop: 20 }}>
      Options:
    </Typography>

    {/* Add appointment options */}
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
  </DialogContent>
  <DialogActions>
        <Button onClick={() => { approve(); navigate("/mentor/mentorProfile"); }}>
          Go to Profile
        </Button>
        <Button onClick={handleDialogClose} color="primary">
          Close
        </Button>
      </DialogActions>
</Dialog>

    </div>
  );
};

export default MentorPage;
