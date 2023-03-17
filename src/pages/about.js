import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Section1(){
    return(
        <div className="text-center mb-5 " style={{
            height:"20vw",
            position:"relative",
            right:"8vw",
            width:"98vw",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + "/assets/sliders/slide1.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
             }}>
            <div className="pt-3 pb-5">
            <h1 className="fs-2 fw-bold green-200"
            style={{
                marginTop:"6vw"
            }}
            >About GourmetHub</h1>
            <p className="text-uppercase fw-bold text-white ">Where health meets succulence</p>
            </div>
        </div>
    );
}


function Section2(){
    return (
        <Container className="py-5 mb-4">
            <Row>
                <Col className="me-0 me-md-3" md={5}>
                    <div className="position-relative mx-5">
                        <img className="img-fluid rounded-16 mb-4 mb-md-0" src="/assets/our-story.png" alt="our-story" />
                        <img src="/assets/ourstory-rotate.png" alt="" className="position-absolute ourstory-pos translate-middle" />
                    </div>
                </Col>
                <Col className="align-self-center" md={6} >
                    <h1 className="fs-2 fw-bold mb-4">Our Story</h1>
                    <p className="fs-5 lh-sm"
                    style={{
                        color:"#9ca4ab"
                    }}
                    >We are not simply another meal prep service; we care about your
                        health! GourmetHub's objective has been to alter the classic definition of
                        healthy meals beyond "boring and bland" to "delicious and tasty"
                        We empower you to pick your own caterer in order to accomplish a fitness goal
                        of your choosing. GourmetHub is a healthy conveninent solution
                        for individuals who want to make a healthy decision but don't have
                        the time.</p>
                </Col>
            </Row>
        </Container>
    );
}

function Section3(){
    return(
        <Container className="text-center">
            <h1 className="fs-3 fw-bold secondary mb-3">How it works</h1>
            <p className=" fs-5 lh-sm"
              style={{
                color:"#9ca4ab"
            }}
            >Eating healthy entails planning, purchasing, cooking, and avoiding
                fatty and sugary meals. We understand how difficult it is to maintain
                a consistently healthy and enjoyable diet. We've all been there
                Our meals are designed to make sure that you'll get the nourishment
                you require, in serving sizes that are just ideal for you, without
                compromising taste or variety</p>
        </Container>
    );
}

function Section4(){
    return(
        <Container className="my-5">
            <Row className="align-items-center justify-content-center mx-md-5 mx-0">
                    <Col lg={4} className="text-center mb-4">
                        <div className="w-35 bg-green-50 rounded-circle border-dark position-relative mx-auto mb-3">
                            <img className="img-fluid p-4 " src="/assets/icons/running.svg" alt="icon" />
                            <span style={{width:"30px",height:"30px"}} className="d-block bg-orange-200 text-white rounded-circle text-center fw-bold position-absolute top-10 start-8 translate-middle fs-5">1</span>
                        </div>
                        <p className="mb-0 fw-bold gray-200 fs-5">Choose your Fitness Goal</p>
                    </Col>

                    <Col lg={4} className="text-center mb-4">
                        <div className="w-35 bg-green-50 rounded-circle border-dark position-relative mx-auto mb-3">
                            <img className="img-fluid p-4 " src="/assets/icons/meal.svg" alt="icon" />
                            <span style={{width:"30px",height:"30px"}} className="d-block bg-orange-200 text-white rounded-circle text-center fw-bold position-absolute top-10 start-8 translate-middle fs-5">2</span>
                        </div>
                        <p className="mb-0 fw-bold gray-200 fs-5">Select your Caterer</p>
                    </Col>

                    <Col lg={4} className="text-center mb-4">
                        <div className="w-35 bg-green-50 rounded-circle border-dark position-relative mx-auto mb-3">
                            <img className="img-fluid m-3 w-75" src="/assets/icons/fast-delivery.svg" alt="icon" />
                            <span style={{width:"30px",height:"30px"}} className="d-block bg-orange-200 text-white rounded-circle text-center fw-bold position-absolute top-10 start-8 translate-middle fs-5">3</span>
                        </div>
                        <p className="mb-0 fw-bold gray-200 fs-5">Healthy meal at your doorstep</p>
                    </Col>
            </Row>
            <div className="text-center mt-5">
                <a href="#" className="no-hover bg-orange-200 text-white py-3 px-4 fs-5 fw-bold rounded-5"
                style={{
                    textDecoration:"none"
                }}
                >Start your Plan</a>
            </div>
        </Container>
    );
}

function about() {
    document.dispatchEvent(new Event('viewChanged'));
    
    return <Container className="page-wrapper "
    style={{
        marginTop:"0vw"
    }}
    >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </Container>
}

export default about;