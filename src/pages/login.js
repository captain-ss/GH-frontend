import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Col } from "react-bootstrap";

function BreadCrumbs() {
  return (
    <Container className="my-4">
      <ul className="list-group d-inline">
        <li className="d-inline">
          <a className="me-2" href="/">
            <img src="/assets/icons/home.svg" alt="home" />
          </a>
        </li>
        <li className="d-inline">
          <a href="#">/ Login or Signup</a>
        </li>
      </ul>
    </Container>
  );
}

// body

function Section() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const values = getValues();

  const [statePhone, setState] = useState("hide");
  const onClickContinue = () => {
    statePhone === "hide" ? setState("show") : setState("hide");
  };

  // logged in
  const [stateLogin, setLogin] = useState("loggedout");
  const onClickLogin = () => {
    if (stateLogin === "loggedout") {
      setLogin("loggedin");
      window.sessionStorage.setItem("userName", "User11");
      window.location.href = "/user-dashboard";
    } else {
      setLogin("loggedout");
      window.sessionStorage.setItem("userName", false);
      window.location.href = "/";
    }
  };
  // logged in

  const onSubmitP = (data, e) => {
    // onClickContinue();
  };

  const onSubmitOTP = (data, e) => {
    // onClickLogin();
  };

  return (
    <div className="mx-0 my-5 d-block d-md-flex">
      <Col className="signup-bg p-5 mb-3 mb-md-0">
        <div className="text-center">
          <h1 className="fs-2 fw-bold text-white">Welcome !</h1>
          <p className="fs-6 fw-bold text-white">
            We empower you in accomplishing your fitness objectives.
          </p>
        </div>
      </Col>

      <Col className="text-center">
        <h1 className="fs-3 fw-bold secondary mb-4">Login / Signup</h1>
        <a
          className="d-flex align-items-center justify-content-center mb-3"
          href="#"
        >
          <img
            style={{ width: "7%" }}
            src="/assets/icons/gmail.svg"
            alt="gmail"
          />
          <span
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
              fontSize: "1.6vw",
            }}
          >
            Gmail
          </span>
        </a>
        {statePhone === "hide" ? (
          <p className="mb-4">or enter your mobile number</p>
        ) : (
          <p className="mb-4">Please enter OTP sent on</p>
        )}

        <div className="form-group text-start w-75 mx-auto">
          <label for="phone" className="control-label fw-bold mb-2">
            Phone Number
          </label>
          {statePhone === "hide" ? (
            <div className="d-flex align-items-center mb-4">
              <img
                className="me-2"
                src="/assets/icons/iphone.svg"
                alt="iphone"
              />
              <select
                className="form-select form-underline select-mobile"
                name="phoneid"
              >
                <option value="+91">+91</option>
                <option value="+971">+971</option>
              </select>
              <form
                id="hook-phone"
                onSubmit={handleSubmit(onSubmitP)}
                className="w-100"
                noValidate
              >
                <input
                  type="text"
                  {...register("Phone", {
                    required: true,
                    required: "Phone Number Required",
                    minLength: 10,
                    maxLength: 10,
                  })}
                  className="form-control form-underline w-100"
                  id="phone"
                  style={{
                    position:"relative",
                    bottom:".5vw"
                  }}
                  placeholder="000000"
                />
              </form>
              <span className="text-danger pt-2">
                {" "}
                {errors.Phone && errors.Phone.message}
              </span>
            </div>
          ) : (
            <div className="text-start">
              <div className="d-flex align-items-center mb-4">
                <img
                  className="me-2"
                  src="/assets/icons/iphone.svg"
                  alt="iphone"
                />
                <span>+971 5556281</span>
              </div>
            </div>
          )}
        </div>

        {statePhone === "show" ? (
          <div className="form-group text-start w-75 mx-auto">
            <label for="otp" className="control-label fw-bold mb-2">
              Enter OTP
            </label>
            <div className="d-flex align-items-center mb-4">
              <img
                className="me-2"
                src="/assets/icons/unlock.svg"
                alt="unlock"
              />
              <form
                id="hook-otp"
                onSubmit={handleSubmit(onSubmitOTP)}
                className="w-100"
                noValidate
              >
                <input
                  {...register("otp", { required: true })}z
                  type="text"
                  className="form-control form-underline w-100"
                  id="otp"
                  placeholder="Type here"
                />
              </form>
            </div>
          </div>
        ) : (
          ""
        )}

        {statePhone === "hide" ? (
          <p className="w-75 mx-auto">
            By continuing you agree to{" "}
            <a className="text-black fw-bold" href="#">
              terms and conditions
            </a>
          </p>
        ) : (
          ""
        )}

        <button
          form={statePhone === "hide" ? "hook-phone" : "hook-otp"}
          onClick={statePhone === "hide" ? onClickContinue : onClickLogin}
          className="border-0 text-center text-white fw-bold bg-green w-75 mx-auto py-3 my-5"
        >
          CONTINUE
        </button>
      </Col>
    </div>
  );
}

function LoginSignUp() {
  return (
    <div>
      <BreadCrumbs />
      <Section />
    </div>
  );
}
// body

export default LoginSignUp;
