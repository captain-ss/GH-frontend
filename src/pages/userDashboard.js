//system files
import React, { useState } from "react";
// import { useForm } from 'react-hook-form';
//system files

// import axios from "axios";
// import { useHistory } from "react-router-dom";

import { Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./userDashboard2.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import muscle1 from "../images/../images/muscle1.svg";
import calendar1 from "../images/calendar1.svg";
import Group8407 from "../images/Group8407.svg";
import Polygon3 from "../images/Polygon3.svg";
import fasting1 from "../images/fasting1.svg";
import time2 from "../images/time2.svg";
import Group8445 from "../images/Group8445.svg";
import foodtray2 from "../images/foodtray2.svg";
import { useHistory } from "react-router-dom";

const UserDashboard = ({ setMeal }) => {
  function handleLogout() {
    window.sessionStorage.removeItem("userName", false);
    window.location.href = "/";
  }

  function Header({ side }) {
    return (
      <div className="d-flex flex-column">
        <div
          className="container-fluid user-header align-items-center justify-content-between w-100
          pl-5 pr-3 pb-3  pt-3 d-flex"
        >
          <i className="fas fa-bars hamburger" onClick={side}></i>
          <div className="d-flex flex-row justify-content-between align-items-center user-header-innner">
            <a className="user-a hover-pointer">
              <img
                className="me-1"
                style={{ width: "11%" }}
                src="/assets/icons/search.svg"
                alt="search"
              />
              <span>Search</span>
            </a>
            <a className="user-a hover-pointer">
              <img
                className="me-1"
                style={{ width: "11%" }}
                src="/assets/icons/bell.svg"
                alt="bell"
              />
              <span>Notifications</span>
            </a>
            <a onClick={handleLogout} className="user-a hover-pointer">
              <img
                className="me-1"
                style={{ width: "11%" }}
                src="/assets/icons/user.svg"
                alt="user"
              />
              <span>Signout</span>
            </a>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="position-absolute top-50 start-0 translate-middle-y px-4 py-2"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(196, 196, 196, 0) 150%)",
            }}
          >
            <h1 className="fw-bold fs-2 mb-1 lh-1">Healthy Living</h1>
            <span className="secondary fw-500">Get 30% off on promo code</span>
          </div>
          <img
            src="/assets/user-dashboard/banner.png"
            alt=""
            className="rounded-5 align-self-center mt-2 mb-4 img-fluid"
            style={{ width: "95%" }}
          />
        </div>
      </div>
    );
  }

  function SideBarContent({ side, sideClick }) {
    const history=useHistory();
    return (
      <div
        className="d-flex flex-column align-items-center w-100 mt-5"
        style={{ position: "relative" }}
      >
        {/* <i className="fas fa-times user-close-btn" onClick={sideClick}></i> */}
        <img
          src="/assets/user-dashboard/miniLogo.png"
          alt="logo"
          className="mb-4"
        />
        <img
          src="/assets/user-dashboard/avatar.png"
          alt="avatar"
          className="mb-4"
        />
        <a className="user-sidebar-outer hover-pointer"
        onClick={()=>{
          history.push("/user-dashboard")
        }}
        >
          <i className="far fa-user user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>User</span>
        </a>
        <a className="user-sidebar-outer hover-pointer"
        onClick={()=>{
          history.push("/account-settings")
        }}
        >
          <i className="fas fa-user-cog  user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
        </a>
        <a className="user-sidebar-outer hover-pointer"
         onClick={()=>{
          history.push("/account-settings")
        }}
        >
          <i className="fas fa-clipboard-list user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>Summary</span>
        </a>
        <a className="user-sidebar-outer hover-pointer">
          <i className="fas fa-user-md user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
        </a>
        <a className="user-sidebar-outer hover-pointer">
          <i className="fas fa-receipt user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>Invoice</span>
        </a>
        <a onClick={handleLogout} className="user-sidebar-outer hover-pointer">
          {" "}
          <i className="fas fa-sign-out-alt  user-sidebar-icon"></i>
          <span style={{ display: !side ? "flex" : "none" }}>Logout</span>
        </a>
      </div>
    );
  }

  const SideBar = ({ side, sideClick }) => {
    return (
      <nav
        className={
          side
            ? "user-sidebar user-sidebar-open"
            : "user-sidebar user-sidebar-close"
        }
      >
        <SideBarContent side={side} sideClick={sideClick} />
      </nav>
    );
  };

  function Status({ date, end, img, payment, pac, plan, orderId, heading }) {
    return (
      <>
        <div
          className="container-fluid"
          style={{ marginBottom: !orderId ? "100px" : "" }}
        >
          <h3 className="mb-4" style={{ color: "#EB5933" }}>
            {heading}
          </h3>
          <div
            className="row pt-4 pb-2 mb-4"
            style={{ borderRadius: "20px", background: "#F6F3F3" }}
          >
            <div className="col-md-3 col-lg-3 mb-4 d-flex justify-content-center">
              <img src={img} alt="" style={{ borderRadius: "10px" }} />
            </div>
            <div className="col-md-9 col-lg-9">
              <div className="row">
                {orderId ? (
                  <div className="col-md-12 mb-md-0 mb-3">
                    <div className="align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                      <p className="text-black-50">
                        Order Id - <span className="text-black">{orderId}</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="col-md-4 mb-md-0 mb-3">
                  <div className="align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                    <i className="far fa-calendar-alt me-3 h5"></i>
                    <p className="text-black-50">
                      Start Time - <span className="text-black">{date}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                  <div className="align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                    <i className="far fa-calendar-alt me-3 h5"></i>
                    <p className="text-black-50">
                      End Time - <span className="text-black">{end}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                  <div className="align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                    <i className="far fa-money-bill-alt me-3 h5"></i>
                    <p className="text-black-50">
                      Package Cost - <span className="text-black">{pac}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                  <div className="align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                    <i className="fas fa-history me-3 h5"></i>
                    <p className="text-black-50">
                      Plan Duration - <span className="text-black">{plan}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-md-0">
                  <div className=" align-item-center d-flex flex-row justify-content-lg-start justify-content-center">
                    <i className="far fa-check-circle me-3 h5"></i>
                    <p className="text-black-50">
                      Payment status -{" "}
                      <span className="text-black">{payment}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function OrderStatus() {
    return (
      <div className="container-fluid mb-4">
        <h3 className="mb-4" style={{ color: "#EB5933" }}>
          Order Status
        </h3>
        <Container className="mb-5 mt-5 user-progress">
          <ProgressBar
            className="w-75 mx-auto"
            percent={25}
            fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <div className="p-2 rounded-circle bg-orange-200">
                  <img
                    alt=""
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src="/assets/icons/restaurant-loca.svg"
                  />
                </div>
              )}
            </Step>

            <Step transition="scale">
              {({ accomplished }) => (
                <div className="p-2 rounded-circle">
                  <img
                    alt=""
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src="/assets/icons/document-list.svg"
                  />
                </div>
              )}
            </Step>

            <Step transition="scale">
              {({ accomplished }) => (
                <div className="p-2 rounded-circle">
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src="/assets/icons/tracking-truck.svg"
                    alt=""
                  />
                </div>
              )}
            </Step>
          </ProgressBar>
        </Container>
      </div>
    );
  }

  function HomePage({ side, sideFirst, setSide }) {
    return (
      <div className="w-100">
        <Header side={side} sideFirst={sideFirst} setSide={setSide} />
        <div
          className="d-flex"
          style={{
            justifyContent: "space-between",
            boxSizing: "border-box",
            width: "100%",
            padding: "0% 5% 0%  0% ",
          }}
        >
          <div
            className="user-Dashboard-box1"
            style={{
              width: "35%",
            }}
          >
            <h6
              style={{
                fontWeight: "700",
              }}
            >
              Hii james,
            </h6>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  backgroundColor: "#2FAC66",
                  borderRadius: "100vw",
                  width: "fit-content",
                  padding: "1vw",
                }}
              >
                <img src={muscle1} alt="" />
              </div>
              <div
                style={{
                  marginLeft: "1vw",
                }}
              >
                <div
                  style={{
                    color: "#868484",
                  }}
                >
                  Fitness goal for the week{" "}
                </div>
                <h5
                  style={{
                    color: "#EB5933",
                    fontWeight: "700",
                  }}
                >
                  Muscle Gain
                </h5>
              </div>
            </div>
            <div
              style={{
                marginTop: "2vw",
                display: "flex",
              }}
            >
              <div
                style={{
                  paddingLeft: "5vw",
                }}
              >
                <div
                  style={{
                    color: "#979494",
                    fontSize: "14px",
                  }}
                >
                  Kcal
                </div>
                <div
                  style={{
                    color: "#2FAC66",
                    fontWeight: "700",
                  }}
                >
                  6620
                </div>
              </div>
              <div
                style={{
                  marginLeft: "3vw",
                }}
              >
                <div
                  style={{
                    color: "#979494",
                    fontSize: "14px",
                  }}
                >
                  Total meals consumed
                </div>
                <div
                  style={{
                    color: "#2FAC66",
                    fontWeight: "700",
                  }}
                >
                  12/30
                </div>
              </div>
            </div>
          </div>
          <div className="user-Dashboard-box1">
            <h5
              style={{
                color: "#EB5933",
                fontWeight: "700",
              }}
            >
              Your Caterer
            </h5>
            <div>
              <img src={calendar1} alt="" />
              <b>From Date -</b>
              <span> 1st Nov 2021</span>
            </div>
            <div>
              <img src={calendar1} alt="" />
              <b>To Date -</b>
              <span> 30th Nov 2021</span>
            </div>
            <div>
              <img src={calendar1} alt="" />
              <b>Plan Duration -</b>
              <span> 1 month</span>
            </div>
            <div>
              <img src={calendar1} alt="" />
              <b>Preference -</b>
              <b
                style={{
                  color: "black",
                }}
              >
                <img src={Group8445} alt="" /> Non-Veg
              </b>
            </div>
            <img src={Group8407} className="mt-2" alt="" />
          </div>
          <div className="user-Dashboard-box1">
            <h5
              style={{
                color: "#EB5933",
                fontWeight: "700",
              }}
            >
              Your combo
            </h5>
            <div
              style={{
                display: "flex",
                gap: "2vw",
              }}
            >
              <img src={foodtray2} alt="" />
              <span>3 * Meal</span>
              <span>1 * Snack</span>
            </div>
            <img src={time2} className="m-1" alt="" />
            <small>Days Selected - </small>
            <b>5 Days</b>
            <div></div>
          </div>
        </div>
        <span
          style={{
            position: "relative",
            top: "4vw",
            marginBottom: "4vw",
          }}
        >
          Please make a selection of items for the week and save changes
        </span>

        <div
          style={{
            marginTop: "4vw",
            display: "flex",
          }}
        >
          <img
            src={calendar1}
            style={{
              width: "1.4%",
            }}
            alt=""
          />
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.5vw",
              color: "coral",
              margin: "0vw .5vw ",
            }}
          >
            This Week <img src={Polygon3} alt="" />
          </span>
          <div
            style={{
              borderTop: "1px solid black",
              width: "85%",
              position: "relative",
              top: "1vw",
            }}
          ></div>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#F4F4F4",
            padding: "3vw 0vw",
            width: "90%",
            margin: "5%",
          }}
        >
          <img src={fasting1} className="m-3" alt="" />
          <div>
            You don’t have a meal plan scheduled for <b>Wednesday</b>, 16th
            November
          </div>
        </div>
      </div>
    );
  }
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="w-100 d-flex flex-row">
      <SideBar side={sidebar} sideClick={showSidebar} />
      <HomePage side={showSidebar} sideFirst={sidebar} setSide={setSidebar} />
    </div>
  );
};

export default UserDashboard;
