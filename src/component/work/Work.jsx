import React, { useState } from "react";
import { data } from "./workList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./work.scss";

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div id="work" className="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {/* <PhoneIphoneIcon fontSize="large" className="img" /> */}
                    {d.icon}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span className="btn">View Project</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowBackIosIcon
        fontSize="large"
        className="arrow left"
        onClick={() => handleClick("left")}
      />

      <ArrowBackIosIcon
        fontSize="large"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Work;
