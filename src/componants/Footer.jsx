import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p class="follow">Follow me.</p>
      <div class="icons">
        <a
          href="https://github.com/Abdallah0118"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://wa.me/+201551533774?text=Hello"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abdallah-mohamed-347a59250"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <p class="designed">
        Developed by <span>Abdallah Mohamed</span> &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
