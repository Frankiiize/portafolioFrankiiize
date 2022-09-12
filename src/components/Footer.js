import React from "react";
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { GitHubIcon } from "../assets/icons/GitHubIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const Footer = () => {
  return ( 
    <footer className="footer">
      <ul className="footer__socialMedia">
        <li>
          <h2>find me in:</h2>
        </li>
        <li>
          <a>
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a>
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };