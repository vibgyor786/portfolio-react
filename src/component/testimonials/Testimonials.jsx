import React from "react";
import "./testimonials.scss";
import { data } from "./testimonialsList";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <a href={d.website} target="_blank">
                <CallMissedOutgoingIcon fontSize="small" className="left" />
              </a>
              <img className="user" src={d.img} alt="" />
              <div className="socials">
                <a href={d.facebook} target="_blank">
                  <FacebookIcon fontSize="small" className="left" />
                </a>
                <a href={d.twitter} target="_blank">
                  <TwitterIcon fontSize="small" className="left" />
                </a>
                <a href={d.instagram} target="_blank">
                  <InstagramIcon fontSize="small" className="left" />
                </a>
              </div>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
