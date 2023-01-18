import React, { useEffect, useState } from "react";
import "../css/header.css";
function Header() {
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
      console.log(isAnimate);
    } else {
      setIsAnimate(false);
      console.log(isAnimate);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", animateHeader);
    return () => window.removeEventListener("scroll", animateHeader);
  });

  return (
    <header
      className={`header__main main ${isAnimate ? "header_animate" : ""}`}
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
                Wholeseller
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

export default Header;
