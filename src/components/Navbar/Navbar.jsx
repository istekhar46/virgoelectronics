import "./Navbar.css";
import Logo from "../../assests/images/logo.png";
import React, { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar-wrapper">
      {" "}
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light px-lg-5 px-sm-3 ${
          isMenuOpen ? "menu-open" : ""
        }`}
        style={{ zIndex: "1", fontSize: "1rem", boxShadow: "0pc 0.5px 0.5px" }}
        ref={navbarRef}
      >
        {" "}
        <div className="container-fluid">
          {" "}
          <a className="navbar-brand" href="/">
            {" "}
            <img src={Logo} alt="" style={{ height: "3rem" }} />{" "}
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            {" "}
            <span className="navbar-toggler-icon" />{" "}
          </button>{" "}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            {" "}
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              {" "}
              {/* <li className="nav-item"> <a className="nav-link mx-3" aria-current="page" href="/">Home</a> </li> */}{" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link mx-3" href="/products">
                  {" "}
                  Products{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link mx-3" href="/about">
                  {" "}
                  About{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav-item">
                {" "}
                <a className="nav-link mx-3" href="/contact">
                  {" "}
                  Contact Us{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};
export default Navbar;
