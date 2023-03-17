import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
function Section1() {
  return (
    <div
      className="mb-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" +
          "/assets/contact-us-bg.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="p-5">
        <p className="fs-4 primary fw-bold lh-sm mb-2">
          Feel Free to drop us a line below
        </p>
        <p className="text-white">We would love to hear from you !</p>
      </div>
    </div>
  );
}
function Section2() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res =await axios.post(
        `${process.env.REACT_APP_INIL_URL}/contact/addContact`,
        {
          contactName: fullName,
          contactEmailId: email,
          contactNumber: phoneNumber,
          subject: subject,
          comments: comment,
        }
      );
      console.log(res);
      setSubmitStatus(true)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <h1>Get in Touch</h1>
      <Row>
        <Col className="me-0 me-md-5" md={7}>
          <form className="mb-5" >
            <div className="d-block d-md-flex align-items-baseline justify-content-between mb-3">
              <div
                className="form-floating"
                style={{
                  width: "22vw",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  id="FullName"
                  placeholder=" "
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
                <label
                  htmlFor="FullName"
                  style={{
                    transition: "all 0.2s  ease-in-out",
                  }}
                >
                  Full Name <span className="text-danger">*</span>
                </label>
              </div>

              <div className="form-floating">
                <input
                  style={{
                    width: "23vw",
                  }}
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder=" "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="Email">
                  Email <span className="text-danger">*</span>
                </label>
              </div>
            </div>

            <div className="d-block d-md-flex align-items-baseline justify-content-between mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  style={{
                    width: "22vw",
                  }}
                  className="form-control"
                  id="Phone"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder=" "
                />
                <label htmlFor="Phone">
                  Phone <span className="text-danger">*</span>
                </label>
              </div>

              <div className="form-floating">
                <input
                  type="text"
                  style={{
                    width: "23vw",
                  }}
                  className="form-control"
                  id="Subject"
                  placeholder=" "
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label htmlFor="Subject">
                  Subject <span className="text-danger">*</span>
                </label>
              </div>
            </div>

            <div className="form-floating">
              <textarea
                className="form-control w-100"
                rows="4"
                placeholder=" "
                id="Comments"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <label for="Comments">
                Comments <span className="text-danger">*</span>
              </label>
            </div>

            <button
              className="text-white bg-orange-200 border-0 px-4 py-1 rounded-5 fw-bold my-4"
              type="submit"
              onClick={(e)=>{
                SubmitHandler(e);
              }}
            >
              Submit
            </button>
            {
           submitStatus && <div
            style={{
              color:"green",
              fontSize:"1.5vw",
              fontWeight:"700"

            }}
            >Submitted</div>
          }
          </form>
        </Col>

        <Col md={4}>
          <h1 className="fs-4 secondary mb-5">Contact information</h1>
          <div className="d-flex mb-4">
            <img
              className="w-5 me-3"
              src="/assets/icons/location.svg"
              alt="location"
            />
            <p className="lh-sm mb-0">
              11th Floor, Building 1A, Dubai Design District - Dubai - United
              Arab Emirates
            </p>
          </div>

          <div className="d-flex mb-4">
            <img
              className="w-5 me-3"
              src="/assets/icons/iphone.svg"
              alt="iphone"
            />
            <p className="lh-sm mb-0">+971 600 560000</p>
          </div>

          <div className="d-flex mb-4">
            <img
              className="w-5 me-3"
              src="/assets/icons/email.svg"
              alt="email"
            />
            <p className="lh-sm mb-0">hello@gourmethub.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function contact() {
  document.dispatchEvent(new Event("viewChanged"));

  return (
    <Container className="page-wrapper partner--wrapper"
    style={{
      marginTop:"0vw"
    }}
    >
      <Section1 />
      <Section2 />
    </Container>
  );
}

export default contact;
