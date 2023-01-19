import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import "../css/hero.css";
function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hero__main main">
      <Fade>
        <div className="background_hero"></div>
      </Fade>
      <div className="hero_child child">
        <Fade bottom>
          <h1>Farmers Market, Fresh, Quality, Wholesale, Direct</h1>
          <a href="#farmer" className="primary-btn">
            Explore
          </a>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
