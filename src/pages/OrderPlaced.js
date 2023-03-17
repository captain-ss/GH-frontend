//system files
import React, { useState } from 'react';
//system files

import { Link } from 'react-router-dom';
import StepsProgress from '../components/StepsProgress/StepsProgress';

import { Label, Container, Row, Col, Nav, Table, Button } from 'react-bootstrap';
// import {Container, Nav, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-step-progress-bar/styles.css";

import SideBar from '../components/SideBar';


const OrderPlaced = ({ setMeal }) => {

    function handleLogout() {
        window.sessionStorage.removeItem("userName", false);
        window.location.href = "/";
    }

    const TableData = [
        { tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "New", lastUpdate: "Jan 10, 2016" },
        { tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "In Progress", lastUpdate: "Jan 10, 2016" },
        { tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
        { tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
        { tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
    ];

    
    function Header({ side }) {
        return (
            <div className="d-flex flex-column">
                <div className="container-fluid user-header align-items-center justify-content-between w-100
          pl-5 pr-3 pb-3  pt-3 d-flex">
                    <i className="fas fa-bars hamburger" onClick={side}></i>
                    <div className="d-flex flex-row justify-content-between align-items-center user-header-innner">
                        <a className="user-a hover-pointer">
                            <img className="me-1" style={{ width: "11%" }} src="./assets/icons/search.svg" alt="search" />
                            <span>Search</span>
                        </a>
                        <a className="user-a hover-pointer">
                            <img className="me-1" style={{ width: "11%" }} src="./assets/icons/bell.svg" alt="bell" />
                            <span>Notifications</span>
                        </a>
                        <a onClick={handleLogout} className="user-a hover-pointer">
                            <img className="me-1" style={{ width: "11%" }} src="./assets/icons/user.svg" alt="user" />
                            <span>Signout</span>
                        </a>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y px-4 py-2" style={{ background: "linear-gradient(90deg, #FFFFFF 0%, rgba(196, 196, 196, 0) 150%)" }}>
                        <h1 className="fw-bold fs-2 mb-1 lh-1">Healthy Living</h1>
                        <span className="secondary fw-500">Get 30% off on promo code</span>
                    </div>
                    <img src="./assets/user-dashboard/banner.png" alt="" className="rounded-5 align-self-center mt-2 mb-4 img-fluid" style={{ width: "95%" }} />
                </div>
            </div>
        );
    }

    function HomePage({ side, sideFirst, setSide }) {
        return (
            <div className="w-100">
                <Header side={side} sideFirst={sideFirst} setSide={setSide} />
                <Container className="page-content order-request--wrapper">
                    <div className='col-md-12 d-flex justify-content-between'>
                        <div className='page-headline mb-3'>
                            <span className='fw-bold fs-6'>Welcome James,</span>
                        </div>
                        <div className='page-headline mb-3'>
                            <button className='px-3 fs-6 fw-bold py-2  file-btn-orange bg-white secondary'>
                                View Dashboard
                            </button>
                        </div>
                    </div>
                    <div className='col-md-12 mb-4 d-flex justify-content-between bg-light p-2' >
                        <div className=''><span className='gray-text'>Order-Id- </span> #1876GG</div>
                    </div>

                <div className='order-progress-bar'>
                    <div className='col-md-12'>
                        <span className='orange-text'>Order status</span>
                    </div>
                    <StepsProgress progress="32" stepIndex={0} />
                </div>

                <div className='caterer-area'>
                    <Row className='align-items-center'>
                        <Col md={3} sm={12}>
                            <div className='caterer-img'>
                                <img src="/assets/user-dashboard/imageLiveHealthy.svg" />
                            </div>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col className='d-flex align-items-center' md={4} sm={6}>
                                    <div className=' caterer-box'>
                                        <div className='start-date d-flex align-items-center'> 
                                         <img src="/assets/user-dashboard/icon-calander.svg" />
                                         <span className='gray-text'>Start Date- </span>
                                         <span>12th Nov 2021</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='d-flex align-items-center' md={4} sm={6}>
                                <div className=' caterer-box'>
                                        <div className='d-flex align-items-center end-date'>  
                                        <img src="/assets/user-dashboard/icon-calander.svg" />
                                        <span className='gray-text'>End Date- </span>
                                        <span>12th Dec 2021</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='d-flex align-items-center' md={4} sm={6}>
                                <div className=' caterer-box'>
                                        <div className='d-flex align-items-center delivery-times'>  
                                        <img src="/assets/user-dashboard/icon-money-gray.svg" />
                                        <span className='gray-text'>Package  cost - </span> 
                                        <span>DHS 200</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='d-flex align-items-center' md={4} sm={6}>
                                <div className=' caterer-box'>
                                        <div className='bd-flex align-items-center illing'> 
                                         <img src="/assets/user-dashboard/icon-time-circle.svg" />
                                         <span className='gray-text'>Plan Duration-  </span>
                                         <span>1 month</span>
                                         </div>
                                    </div>
                                </Col>
                              
                                <Col  className='d-flex align-items-center' md={4} sm={6}>
                                <div className=' caterer-box'>
                                        <div className='delivery-times'>  
                                        <img src="/assets/user-dashboard/icon-checked.svg" />
                                        <span className='gray-text'>Payment status - </span> 
                                        <span>Paid</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                
                </div>

                </Container>
            </div>
        );
    }
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='w-100 d-flex flex-row'>
            <SideBar side={sidebar} sideClick={showSidebar} />
            <HomePage side={showSidebar} sideFirst={sidebar} setSide={setSidebar} />
        </div>
    )
};

export default OrderPlaced;