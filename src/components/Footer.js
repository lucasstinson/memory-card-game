import React from "react";
import githubLogo from "../images/github.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="github-logo" src={githubLogo} alt="github logo"></img>
      <div className="footer">Copyright © 2023 lucasstinson</div>
    </div>
  );
};

export default Footer;
