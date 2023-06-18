import React from "react";
import "./menu.scss";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="container">
        <div className="itemContainer">
          <PhoneIphoneIcon className="icon" />
          <span>+91 8979891106</span>
        </div>
        <div className="itemContainer">
          <MailOutlineIcon className="icon" />
          <span>ganeshsahuatwork@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
