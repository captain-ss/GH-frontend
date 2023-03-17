import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../src/Logo.svg";
import { Container, Navbar, Nav, Button /*, Row, Col*/ } from "react-bootstrap";
import "./Header.scss";

// import sessions from 'express-session';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// creating 24 hours from milliseconds
// const oneDay = 1000 * 60 * 60 * 24;

function SiteTools({ userName }) {
  return (
    <Container className="site-tools--wrapper">
      <div className="site-tools--left">
        <Button variant="link" className="site-tools--links location">
          <img
            className="img-fluid icon-svg"
            src="/assets/icons/my-location.svg"
            alt="location"
          />{" "}
          <span className="d-none d-md-inline-block"
          
          style={{
            color:"black",
            fontWeight:"600"
          }}
          >Use current location</span>
        </Button>
      </div>

      <ul className="site-tools--right nav">
        <li className="nav-item">
          <Link to="/search" className="site-tools--links search nav-link">
            <img
              className="img-fluid icon-svg"
              src="/assets/icons/search.svg"
              alt="search"
            />{" "}
            <span className="d-none d-md-inline-block"
            style={{
                color:"black",
                fontWeight:"700",
                marginLeft:".4vw"

            }}
            >Search </span>
          </Link>
        </li>

        <li className="nav-item">
          <Button variant="link" className="site-tools--links favourites">
            <img
              className="img-fluid icon-svg"
              src="/assets/icons/heart.svg"
              alt="heart"
            />{" "}
            <span className="d-none d-md-inline-block"
            style={{
                color:"black",
                fontWeight:"700",
                marginLeft:".4vw"
            }}
            >Favourites</span>
          </Button>
        </li>

        <li className="nav-item">
          <Link
            to="/login-signup"
            className="site-tools--links profile nav-link"
          >
            <img
              className="img-fluid icon-svg"
              src="/assets/icons/user.svg"
              alt="user"
            />{" "}
            <span className="d-none d-md-inline-block"
            style={{
                color:"black",
                fontWeight:"700",
                marginLeft:".4vw"
            }}
            >
              {userName ? `Hi ${userName}` : "Sign in"}
            </span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

function Header() {
  const [userName, setUserName] = useState("");
  localStorage.getItem("userName") &&
    setUserName(localStorage.getItem("userName"));

  const isDashboard =
    window.location.pathname.split("/")[1] !== "user-dashboard"
      ? window.location.pathname.split("/")[1] !== "vendor-dashboard"
        ? true
        : false
      : false;

  return (
    isDashboard && (
      <div className="header--wrapper">
        <SiteTools userName={userName} />
        <Navbar collapseOnSelect expand="lg">
          <Container className="navbar-wrapper">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="device-navbar"
              id="responsive-navbar-nav"
            >
              <Nav as="ul" className="mx-auto  ">
                <li className="navbar-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    to="/"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    activeClassName="is-active"
                    to="/create-meal-plan"
                    className="nav-link"
                  >
                    Create Meal Plan
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    activeClassName="is-active"
                    to="/partner-with-us"
                    className="nav-link"
                  >
                    Partner With Us
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    activeClassName="is-active"
                    to="/about"
                    className="nav-link"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    activeClassName="is-active"
                    to="/contact"
                    className="nav-link"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </Nav>
              {userName && (
                <div className="cart-link">
                  <Link to="/cart" className="nav-link">
                    <img
                      className="cart-image"
                      src="/assets/icons/cart.svg"
                      alt="user"
                    />
                    <span>Cart</span>
                  </Link>
                </div>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  );
}

export default Header;
