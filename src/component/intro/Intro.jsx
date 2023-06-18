import React, { useEffect, useRef } from "react";

import "./intro.scss";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Intro() {
  useEffect(() => {}, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQFU77w_Jd054w/profile-displayphoto-shrink_800_800/0/1663826974689?e=2147483647&v=beta&t=lUo-Ce7PxQiGPCphMUYe8hN9kNbWmuVISjqTVb_IOUc"
            alt=""
          />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h3>Hi there, I'm</h3>
          <h1>Ganesh sahu</h1>
        </div>
        <a href="#portfolio">
          <ExpandMoreOutlinedIcon className="downArrow" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
