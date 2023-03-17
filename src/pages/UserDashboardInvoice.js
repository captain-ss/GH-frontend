//system files
import React, { useState } from "react";
import ReactDOM from "react-dom";

//system files
import Select from "react-select";
import { Link } from "react-router-dom";
import "../App.scss";


import {
  Label,
  Input,
  Container,
  Row,
  Col,
  Nav,
  Table,
  Button,
} from "react-bootstrap";

// import {Container, Nav, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import SideBar from "../components/SideBar";

const UserDashboardInvoice = ({ setMeal }) => {
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
                src="./assets/icons/search.svg"
                alt="search"
              />
              <span>Search</span>
            </a>
            <a className="user-a hover-pointer">
              <img
                className="me-1"
                style={{ width: "11%" }}
                src="./assets/icons/bell.svg"
                alt="bell"
              />
              <span>Notifications</span>
            </a>
            <a onClick={handleLogout} className="user-a hover-pointer">
              <img
                className="me-1"
                style={{ width: "11%" }}
                src="./assets/icons/user.svg"
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
            src="./assets/user-dashboard/banner.png"
            alt=""
            className="rounded-5 align-self-center mt-2 mb-4 img-fluid"
            style={{ width: "95%" }}
          />
        </div>
      </div>
    );
  }



  function HomePage({ side, sideFirst, setSide }) {
    return (
      <div className="w-100">
        <Header side={side} sideFirst={sideFirst} setSide={setSide} />
        <Container className="page-content order-request--wrapper">
          <div className="page-title-box ticket-detail-title">
            <Row className="mb-3">
              <Col md={6}>
                <Link to="/user-dashboard-ticketing">
                  <h2 className="page-title">
                    <span className="mb-3 text-orange">Invoices</span>
                  </h2>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="table-responsive  mb-5">
            <Table className="mb-0 table-striped table-borderless invoice-details-table">
              <thead className="table-light">
                {/* <tr>
							<th scope="col">Ticket ID</th>
							<th scope="col">Subject</th>
							<th scope="col">Status</th>
							<th scope="col">
								{" "}
                <img src="/assets/user-dashboard/icon-location-orange.svg"></img>
								<span className="px-1">Location</span>
							</th>
						</tr> */}
              </thead>
              <tbody>
                  <tr></tr>
                <tr>
                  <td>
                    <img src="/assets/user-dashboard/imageLiveHealthy.svg"></img>
                  </td>
                  <td>
                    <span className="text-orange">
                      <img src="/assets/user-dashboard/eco-food-icon.svg"></img>{" "}
                      Live Healthy
                    </span>
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/calendar-orange-icon.svg"></img>{" "}
                    Start date- 12/1/2022
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/calendar-orange-icon.svg"></img>{" "}
                    End date- 12/3/2022
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/icon-location-orange.svg"></img>
                    Lorem Ipsum
                  </td>
                  <td>
                    <button className="download-btn">
                      <img src="/assets/user-dashboard/download-orange-icon.svg"></img>
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/assets/user-dashboard/imageWhatsOn.svg"></img>
                  </td>
                  <td>
                    <span className="text-orange">
                      <img src="/assets/user-dashboard/eco-food-icon.svg"></img>{" "}
                      What’s on
                    </span>
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/calendar-orange-icon.svg"></img>{" "}
                    Start date- 12/1/2022
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/calendar-orange-icon.svg"></img>{" "}
                    End date- 12/3/2022
                  </td>
                  <td>
                    <img src="/assets/user-dashboard/icon-location-orange.svg"></img>
                    Lorem Ipsum
                  </td>
                  <td>
                    <button className="download-btn">
                      <img src="/assets/user-dashboard/download-orange-icon.svg"></img>
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
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

export default UserDashboardInvoice;
