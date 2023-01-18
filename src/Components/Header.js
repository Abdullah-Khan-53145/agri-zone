import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import "../css/header.css";
function Header({ color, setColor }) {
  const [selectedOption, setSelectedOption] = useState("Login as");
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    if (event.target.value !== "Login as") {
      setSelectedOption(event.target.value);
      console.log(`Selected option: ${event.target.value}`);
    }
  };
  const animateHeader = () => {
    if (window.scrollY > 100) {
      setIsAnimate(true);
    }
    if (
      window.scrollY >
      document.querySelector(".costomer__section__main").offsetTop - 200
    ) {
      setColor(1);
      console.log(color);
    }
    if (window.scrollY < 400) {
      setColor(0);
    }
    if (
      window.scrollY >
      document.querySelector(".farmer__section__main").offsetTop - 200
    ) {
      setColor(2);
      console.log(color);
    }
    if (
      window.scrollY <
        document.querySelector(".farmer__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".costomer__section__main").offsetTop - 200
    ) {
      setColor(1);
    }
    if (
      window.scrollY >
      document.querySelector(".wholeseller__section__main").offsetTop - 200
    ) {
      setColor(3);
      console.log(color);
    }
    if (
      window.scrollY <
        document.querySelector(".wholeseller__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".farmer__section__main").offsetTop - 200
    ) {
      setColor(2);
    }
    if (
      window.scrollY >
      document.querySelector(".footer__section__main").offsetTop - 200
    ) {
      setColor(4);
      console.log(color);
    }
    if (
      window.scrollY <
        document.querySelector(".footer__section__main").offsetTop - 200 &&
      window.scrollY >
        document.querySelector(".wholeseller__section__main").offsetTop - 200
    ) {
      setColor(3);
    }
    if (window.scrollY < 100) {
      setIsAnimate(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", animateHeader);
    console.log(color);
    return () => window.removeEventListener("scroll", animateHeader);
  });

  return (
    <header
      className={`header__main main ${isAnimate ? "header_animate" : ""}`}
      style={{ background: color.colors[color.index] }}
    >
      <div className="header__main__child child">
        <div
          className={`left ${isOpen ? "open" : "close"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/imgs/close.svg" alt="" className={`ham__menu `} />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hamburger__menu" onClick={() => setIsOpen(!isOpen)}>
          <img src="/imgs/open.svg" alt="" />
        </div>
        <div className="mid">
          <img src="/imgs/logo.png" alt="" />
        </div>
        <div className="rigth">
          <div className="header_select">
            <select
              className="header__dropdown"
              value={selectedOption}
              onChange={handleChange}
            >
              <option
                className="header__dropdown-option"
                value="Login as"
                disabled
              >
                Login as
              </option>
              <option className="header__dropdown-option" value="Farmer">
                Farmer
              </option>
              <option className="header__dropdown-option" value="Wholeseller">
                Wholesaler
              </option>
              <option className="header__dropdown-option" value="Customer">
                Customer
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);
