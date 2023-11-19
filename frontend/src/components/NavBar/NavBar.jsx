import { WorldIDWidget } from "@worldcoin/id";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NavBar = ({ currentAccount, connectWalletHandler }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          padding: "1px",
        }}
      >
        <header className="navbar-container">
  <div className="navbar-logo">
    {/* <img src="../../assets/logomyDMentor.PNG" /> */}
            <h1 className="logo">myDMentor</h1>
          </div>
          <div className="navbar-links">
            <Link to="/">
              <a href="#">Home</a>
            </Link>
            <Link to="/mentee">
              <a href="#">My Mentees</a>
            </Link>
            <Link to="/mentor">
              <a href="#">Mentors</a>
            </Link>
          </div>
          <div className="world-id">
            {currentAccount ? (
              <WorldIDWidget
               actionId='app_staging_7e334f6a4857d86a5279457f8484ef90'
                signal="tru_signal"
                enableTelemetry
                onSuccess={() => console.log("success")} // you'll actually want to pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
              />
            ) : (
              <Button
                className="connect-wallet-button"
                onClick={connectWalletHandler}
                style={{ background: "#4e3188", color: "white" }}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
