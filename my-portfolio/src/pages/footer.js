import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://github.com/aminaopio" target="_blank" rel="noreferrer">
                <GitHubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/aminaopio/" target="_blank" rel="noreferrer">
                <LinkedInIcon/>
                </a>
                <a href="mailto:aminaopio@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon />
                </a>
      </div>
      <p> &copy; 2023 aminaopio.co</p>
    </div>
  );
}

export default Footer;