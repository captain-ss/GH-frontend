import logo from '../Logo.svg';
import {Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"


function Logo() {
    return (
        <img className="mb-3" src={logo} alt="Logo" />
    );
}

function Footer(){
    return (
        <div>
            <div className="bg-green-200 p-2 p-lg-5">
                <div className="w-n-75 mx-auto">
                    <form className="d-flex align-items-center" action="#" method="post">
                        <img className="me-2 mt-auto d-none d-md-block" src="/assets/icons/mail.svg" alt="mail" />
                        <div className="w-100">
                            <h1 className="text-white fs-5 fw-bold">SUBSCRIBE TO NEWSLETTER</h1>
                            <div className="input-group">
                                <input type="text" 
                                style={{
                                    padding:".8vw 1vw",
                                    ouline:"none",
                                    // borderRadius:"1vw 0vw 0vw .5vw"
                                }}
                                className="form-control rounded-left-10" placeholder="Enter email id" />
                                <button className="bg-black border-0 fw-bold text-white input-group-text rounded-right-6" id="basic-addon2">Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        <Container className="d-block d-md-flex align-items-center justify-content-between py-5">
            <div className="">
                    <a href="/">
                        <Logo />
                    </a>
                
                <ul className="p-0 mb-0 list-inline text-center mb-3 md:mb-0">
                    <li className="d-inline px-3">
                        <a href="#">
                            <img src="/assets/icons/facebook.svg" alt="facebook" />
                        </a>
                    </li>

                    <li className="d-inline px-3">
                        <a href="#">
                            <img src="/assets/icons/instagram.svg" alt="instagram" />
                        </a>
                    </li>

                    <li className="d-inline px-3">
                        <a href="#">
                            <img src="/assets/icons/youtube.svg" alt="youtube" />
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <Row>
                    
                    <Col xs={12} md={4}>
                        <h1 className="primary "
                         style={{
                            fontSize:"1.5vw"
                        }}
                        >Company</h1>
                        <ul className="p-0 mb-0 list-inline">
                            <li className="text-nowrap mb-1">
                                <Link 
                                   style={{
                                    textDecoration:"none",
                                    color:"gray"
                                   }}
                                        
                                   to="/about">About Us </Link>
                            </li>
                            <li className="text-nowrap mb-1">
                            <Link 
                                   style={{
                                    textDecoration:"none",
                                    color:"gray"
                                   }}
                                        
                                   to="/create-meal-plan/build-profile">create meal plan</Link> 
                            </li>
                            <li className="text-nowrap mb-1">
                                   <Link 
                                   style={{
                                    textDecoration:"none",
                                    color:"gray"
                                   }}
                                        
                                   to="/partner-with-us">Partner With Us </Link> 
                            </li>
                            <li className="text-nowrap mb-1">
                            <Link 
                                   style={{
                                    textDecoration:"none",
                                    color:"gray"
                                   }}
                                        
                                   to="/contact">Contact us</Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h1 className="primary "
                         style={{
                            fontSize:"1.5vw"
                        }}
                        >Vendor</h1>
                        <ul className="p-0 mb-0 list-inline">
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Plan & Pricing
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Accounting
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="/support">
                                    Support
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                               
                                   <Link 
                                   style={{
                                    textDecoration:"none",
                                    color:"gray"
                                   }}
                                        
                                   to="/support">FAQ’s</Link> 
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h1 className="primary "
                        style={{
                            fontSize:"1.5vw"
                        }}
                        >Policies</h1>
                        <ul className="p-0 mb-0 list-inline">
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Terms & Conditions
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Privacy Policy
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Refund Policy
                                </div>
                            </li>
                            <li className="text-nowrap mb-1">
                                <div className="gray-200" href="#">
                                    Our license
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>

        <div className="pt-2 border-top-green-1 mx-2">
            <Container>
                <Row className="d-block d-md-flex align-items-center justify-content-between">
                    <Col>
                    <p className="text-center text-md-start">&copy;2021 All Rights Reserved</p>
                    </Col>
                    <Col>
                    <p className="text-center text-md-end">Digital Partner Tonic Worldwide</p>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
    
}

export default Footer;