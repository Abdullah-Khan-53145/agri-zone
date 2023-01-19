import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { setColorAPI } from "../actions";
import { SignOutAPI } from "../actions";
import "../css/header.css";
function Header({ color, setColor, user, signOut }) {
  const [selectedOption, setSelectedOption] = useState("Login as");
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { role } = useParams();
  const handleChange = (event) => {
    if (event.target.value !== "Login as") {
      setSelectedOption(event.target.value);
      console.log(`Selected option: ${event.target.value}`);
      document
        .getElementById(event.target.value.toLowerCase())
        .scrollIntoView({ behavior: "smooth" }, true);
    }
  };
  const headerSizeAnimator = () => {
    if (window.scrollY > 100) {
      setIsAnimate(true);
    }
    if (window.scrollY < 100) {
      setIsAnimate(false);
    }
  };

  const animateHeaderHome = () => {
    headerSizeAnimator();
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
  };
  useEffect(() => {
    if (role) {
      window.addEventListener("scroll", headerSizeAnimator);
    } else {
      window.addEventListener("scroll", animateHeaderHome);
    }
    return () => window.removeEventListener("scroll", animateHeaderHome);
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
            <li>
              <Link
                to={`${!role ? "/" : `/user/${role}`}`}
                style={{ color: "black" }}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="#about" style={{ color: "black" }}>
                About
              </a>
            </li>
            {role === "farmer" || role === "wholesaler" ? (
              <li>
                <Link
                  style={{ color: "black" }}
                  to={`/user/${role}/add-product`}
                >
                  Add product
                </Link>
              </li>
            ) : (
              <li>Contact</li>
            )}
          </ul>
        </div>
        <div className="hamburger__menu" onClick={() => setIsOpen(!isOpen)}>
          <img src="/imgs/open.svg" alt="" />
        </div>
        <div className="mid">
          <img src="/imgs/logo.png" alt="" />
        </div>
        <div className="rigth">
          {!role ? (
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
                  <a href="#farmer" style={{ color: "black" }}>
                    Farmer
                  </a>
                </option>
                <option className="header__dropdown-option" value="Wholesaler">
                  <a href="#wholesaler" style={{ color: "black" }}>
                    Wholesaler
                  </a>
                </option>
                <option className="header__dropdown-option" value="Customer">
                  <a href="#customer" style={{ color: "black" }}>
                    Customer
                  </a>
                </option>
              </select>
            </div>
          ) : (
            <div className="user__header__info">
              <div className="user__profile__pic">
                <img src={user.photoURL} alt="" />
                <div className="logout__button">
                  <div className="dropdown__logout">
                    <div className="pointer"></div>
                    <button
                      style={{ backgroundColor: color.colors[color.index] }}
                      className="primary-btn"
                      onClick={() => {
                        navigate("/");
                        signOut();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart__icon">
                <span>1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  color: state.colorState,
  user: state.userState.user,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
  signOut: () => dispatch(SignOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);
