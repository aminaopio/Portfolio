import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <GitHubIcon />
      <LinkedInIcon/>
      <EmailIcon />
      </div>
      <p> &copy; 2023 aminaopio.co</p>
    </div>
  );
}

export default Footer;