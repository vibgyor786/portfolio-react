import React, { useState, useEffect } from "react";
import PortfolioList from "./PortfolioList";
import { list } from "./list";
import { featuredList, webList } from "../../data.js";
import "./portfolio.scss";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredList);
        break;
      case "web":
        setData(webList);
        break;

      default:
        setData(featuredList);
    }
  }, [selected]);

  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
