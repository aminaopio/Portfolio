import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from '@mui/material/Link';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://github.com/aminaopio" >
                <GitHubIcon/>
                </Link>
                <Link href="https://www.linkedin.com/in/aminaopio/">
                <LinkedInIcon/>
                </Link>
                <Link  a href="mailto:aminaopio@gmail.com">
                <EmailIcon />
                </Link>
      </div>
      <p> &copy; 2023 aminaopio.co</p>
    </div>
  );
}

export default Footer;