import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import StepsProgress from "../components/StepsProgress/StepsProgress";
import GHBreadcrumb from "../components/GHBreadcrumb/GHBreadcrumb";
import HeaderTag from "../components/global/HeaderTag/HeaderTag";
import "../styles/components/build-profile.scss";
import axios from "axios";
function BuildProfile() {
  const [validated, setValidated] = useState(false);
  const [isFormValidated, setFormValidated] = useState(false);
  const [goals, setGoals] = useState();
  const vendorTags = JSON?.parse(window?.localStorage?.getItem("vendorTags"));

  if (!vendorTags) {
    vendorTags = [{ tagName: "No tags available" }];
  }
  const history = useHistory();
  console.log(vendorTags);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    setFormValidated(form.checkValidity());
    setValidated(true);
  };
  const pagePath = [
    {
      path: "/create-meal-plan",
      label: "Create Meal Plan",
    },
    {
      path: "",
      label: "Build Profile",
    },
  ];

  const [buildProfile, setBuildProfile] = useState({
    fullname: "",
    email: "",
    mobile: "",
    goal: "",
    location: "",
    gender: "",
  });
  const fetchGoals = async () => {
    try {
      
      const res = await axios.get(
        `${process.env.REACT_APP_INIL_URL}/goals/viewGoals`
      );
      setGoals(res.data.success.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(buildProfile);
  useEffect(() => {
    fetchGoals();
    document.dispatchEvent(new Event("viewChanged"));

    if (localStorage.getItem("buildProfile")) {
      setBuildProfile(JSON.parse(localStorage.getItem("buildProfile")));
    }
  }, []);

  useEffect(() => {
    if (!isFormValidated) return;
    // debugger
    localStorage.setItem("buildProfile", JSON.stringify(buildProfile));
    history.push("/create-meal-plan/formulate-plan");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValidated]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setBuildProfile((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Container
      className="page-wrapper"
      style={{
        marginTop: "0vw",
      }}
    >
      <GHBreadcrumb pathArray={pagePath} />
      <HeaderTag tag="h1" className="profile-title">
        <span className="color-orange">3 simple steps</span> to complete your
        plan
      </HeaderTag>
      <StepsProgress progress="32" stepIndex={0} />
      <Container className="profile-form gh-form">
        <HeaderTag tag="h2" className="profile-form-title">
          Build your profile
        </HeaderTag>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form-profile"
        >
          <Row>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="fullname">
                <Form.Label className="sr-only">Full name</Form.Label>
                <Form.Control
                  name="fullname"
                  type="text"
                  placeholder="Full name*"
                  value={buildProfile.fullname}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter full name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="email">
                <Form.Label className="sr-only">Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address*"
                  value={buildProfile.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="mobile">
                <Form.Label className="sr-only">Mobile number</Form.Label>
                <InputGroup>
                  <InputGroup.Text aria-label="Country Code">
                    +971
                  </InputGroup.Text>
                  <Form.Control
                    name="mobile"
                    type="number"
                    placeholder="Mobile number*"
                    value={buildProfile.mobile}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter mobile number.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-end">
            <Col md={6} lg={4}>
              <Form.Group className="mb-5 goal-wrapper" controlId="goal">
                <Form.Label className="sr-only">Goal</Form.Label>
                <Form.Select
                  name="goal"
                  className="ico-goal"
                  value={buildProfile.goal}
                  onChange={handleChange}
                  aria-label="Default select example"
                  required
                >
                  <option value="">Goal*</option>
                  {goals?.map((item, index) => {
                    return (
                      <option value={item.goalsName}>{item.goalsName}</option>
                    );
                  })}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select goal.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="location">
                <Form.Label className="sr-only">Location</Form.Label>
                <Form.Select
                  name="location"
                  value={buildProfile.location}
                  onChange={handleChange}
                  aria-label="Default select example"
                  required
                >
                  <option value="">Location*</option>
                  <option value="gujrat">gujrat</option>
                  <option value="rampura">rampura </option>
                  <option value="lucknow">lucknow</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select location.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Col md={6} lg={4}>
                <Form.Label>Gender*</Form.Label>
                <Form.Group className="mb-5 d-flex">
                  <Form.Check
                    className="mx-3"
                    name="gender"
                    id="male"
                    type="radio"
                    label="Male"
                    value="male"
                    checked={buildProfile.gender === "male"}
                    onChange={handleChange}
                    required
                  />
                  <Form.Check
                    className="mx-3"
                    name="gender"
                    id="female"
                    type="radio"
                    label="Female"
                    value="female"
                    checked={buildProfile.gender === "female"}
                    onChange={handleChange}
                    required
                  />
                  <Form.Check
                    className="mx-3"
                    name="gender"
                    id="other"
                    type="radio"
                    label="Other"
                    value="other"
                    checked={buildProfile.gender === "other"}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* <Form.Check.Feedback type="invalid">Please select gender.</Form.Check.Feedback> */}
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="text-sm-end">
              <Button
                type="submit"
                className="cta cta--reverse d-inline-block"
                style={{
                  backgroundColor: "#eb5933",
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default BuildProfile;
