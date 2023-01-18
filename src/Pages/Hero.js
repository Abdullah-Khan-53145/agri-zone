import React from "react";
import { Fade } from "react-reveal";
import "../css/hero.css";
function Hero() {
  return (
    <div className="hero__main main">
      <Fade>
        <div className="background_hero"></div>
      </Fade>
      <div className="hero_child child">
        <Fade bottom>
          <h1>Farmers Market, Fresh, Quality, Wholesale, Direct</h1>
          <button className="primary-btn">Explore</button>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
