import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>2020 BEATS All rights reserved</p>
      <p className="icons">
        <a
          href="https://github.com/Minus0149"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://instagram.com/minus_luci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/minus_luci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
}

export default Footer;
