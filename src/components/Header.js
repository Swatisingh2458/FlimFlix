import React from "react";
import "../style.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="flimflix" />

      <h2 className="app-subtitles">
        FlimFlix – Watch, Explore, Repeat! Your Ticket to Unlimited
        Entertainment!
      </h2>
    </div>
  );
}
