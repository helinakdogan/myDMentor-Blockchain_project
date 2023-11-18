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


const MentorPage = ({ currentAccount }) => {
  const [gigVisible, setGigVisible] = useState("");
  const [price, setPrice] = useState(0);
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
                backgroundColor: "#4e3188",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
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
                  Description
                </Typography>
                <Typography variant="body2" style={{ color: "white" }}>
                  Number of mentees: 12
                </Typography>
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
                backgroundColor: "#4e3188",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
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
                  Description
                </Typography>
                <Typography variant="body2" style={{ color: "white" }}>
                  Number of mentees: 12
                </Typography>
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
                backgroundColor: "#4e3188",
              }}
            >
              <div style={{ height: "50%", overflow: "hidden" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
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
                  Description
                </Typography>
                <Typography variant="body2" style={{ color: "white" }}>
                  Number of mentees: 12
                </Typography>
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

        {gigVisible && (
          <div className="gig-container">
            <TextField type="text" placeholder="Title" />
            <TextField type="text" placeholder="Description" />
            <TextField
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button
              type="submit"
              className="gig"
              style={{ float: "right" }}
              onClick={() => stakeClientAmount(price)}
            >
              Submit
            </Button>
          </div>
        )}
      </Container>

      <Dialog open={openDialog} onClose={handleDialogClose}>
  <DialogTitle>Mentor Details</DialogTitle>
  <DialogContent>
    

  <div style={{ height: '20%', overflow: 'hidden' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg"
        alt="Mentor"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>

    <Typography variant="body1">
      Welcome to Mentor X's profile! I am a passionate mentor with expertise
      in various fields. Let me help you achieve your goals and overcome
      challenges.
    </Typography>

    <Typography variant="h6" style={{ marginTop: 20 }}>
      Appointment Options:
    </Typography>

    {/* Add appointment options */}
    <Button variant="outlined" style={{ marginRight: 10 }}>
      Uploaded Video
    </Button>
    <Button variant="outlined" style={{ marginRight: 10 }}>
      Written Feedback
    </Button>
  </DialogContent>
  <DialogActions>
    <Button>Approve</Button>
    <Button onClick={handleDialogClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default MentorPage;
