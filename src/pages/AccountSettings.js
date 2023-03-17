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
import "bootstrap/dist/css/bootstrap.min.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import SideBar from "../components/SideBar";
const AccountSettings = ({ setMeal }) => {
    function handleLogout() {
        window.sessionStorage.removeItem("userName", false);
        window.location.href = "/";
    }
    function Header({ side }) {
        return (
            <div className="d-flex flex-column">
                <div className="container-fluid user-header align-items-center justify-content-between w-100
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
                                        <span className="mb-3 text-orange">Account settings</span>
                                    </h2>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <form className="account-setting-form">
                        <div className="row mb-4 align-items-center">
                            <div className="col">
                                <label htmlFor="firstName" className="col-form-label mb-2">
                                First Name <em>*</em>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    aria-describedby="firstName"
                                    placeholder="Albert"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="col-form-label mb-2">
                                Last Name <em>*</em>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    aria-describedby="lastName"
                                    placeholder="D’soza"
                                />
                            </div>
                        </div>
                        <div className="row mb-4 g-3 align-items-center">
                            <div className="col">
                                <label htmlFor="emailId" className="col-form-label mb-2">
                                Email id <em>*</em>
                                </label>
                                <input
                                    type="email"
                                    id="emailId"
                                    className="form-control"
                                    placeholder="Albert@hotmail.com"
                                    aria-describedby="Email id *"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="mobileNumber" className="col-form-label mb-2">
                                Mobile Number <em>*</em>
                                </label>
                                <input
                                    type="number"
                                    id="mobileNumber"
                                    className="form-control"
                                    placeholder="+971 600 560000"
                                    aria-describedby="mobileNumber"
                                />
                            </div>
                        </div>
                        <div className="row mb-4 g-3 align-items-center">
                            <div className="col">
                                <label htmlFor="currentPassword" className="col-form-label mb-2">
                                Current Password 
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    className="form-control"
                                    aria-describedby="currentPassword"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="newPassword" className="col-form-label mb-2">
                                New Password 
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="form-control"
                                    aria-describedby="newPassword"
                                />
                            </div>
                        </div>
                <div className="submit-and-cancel-button-area mb-5 mt-5">
                    <button className="  border-0 save-changes-button  bg-orange-200 text-white  fs-7  rounded-2" type="submit">Save changes</button>
                    <button className=" rounded-5 cancel-button rounded-2 fs-7" type="reset">Cancel</button>
                </div>
                    </form>
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

export default AccountSettings;
