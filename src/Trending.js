import React from "react";
import "./Trending.css";

function Trending(props) {
  return (
    <div className="Trending">
      <span className="Trending-title">{props.title}</span>
      <div
        className="Trending-image"
        style={{
            backgroundImage:
              `url(${props.image})`,
          }}
      >
        {/* <img src={props.image} alt="" /> */}
      </div>
      <a href="/">Link Provisório</a>
    </div>
  );
}

export default Trending;
