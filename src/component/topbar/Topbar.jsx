import React from "react";
import "./topbar.scss";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <PhoneIphoneIcon className="icon" />
            <span>(234)803 428 5512</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>atu.prosper@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hambuger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
