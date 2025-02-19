import React from "react";
import "../style.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} FlimFlix, All Rights Reserved.
      </p>
    </footer>
  );
}
