import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Col,
  Container,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import StepsProgress from "../components/StepsProgress/StepsProgress";
import GHBreadcrumb from "../components/GHBreadcrumb/GHBreadcrumb";
import HeaderTag from "../components/global/HeaderTag/HeaderTag";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/components/formulate-plan.scss";

function FormulatePlan() {
  const selectDays = useRef();
  const [validated, setValidated] = useState(false);
  const [isFormValidated, setFormValidated] = useState(false);
  const [goals, setGoals] = useState();

  const history = useHistory();
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
  const [formulatePlan, setFormulatePlan] = useState({
    plan: 1,
    startDate: new Date(),
    endDate: "",
    meals: "",
    snacks: "",
    days: [],
  });
  // const [duration, setDuration] = useState({ months: 0, days: 0 });
  const days = [
    { label: "Sunday", value: "1" },
    { label: "Monday", value: "2" },
    { label: "Tuesday", value: "3" },
    { label: "Wednesday", value: "4" },
    { label: "Thursday", value: "5" },
    { label: "Friday", value: "6" },
    { label: "Saturday", value: "7" },
  ];
  const buildProfile = JSON.parse(localStorage.getItem("buildProfile"));

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (formulatePlan.days.length < 5) {
      selectDays.current.classList.add("days-error");
      // return;
    } else {
      selectDays.current.classList.remove("days-error");
      setFormValidated(form.checkValidity());
    }
    setValidated(true);
  };

  useEffect(() => {
    document.dispatchEvent(new Event("viewChanged"));

    if (localStorage.getItem("formulatePlan")) {
      const tempFormulatePlan = JSON.parse(
        localStorage.getItem("formulatePlan")
      );
      setFormulatePlan({
        plan: tempFormulatePlan.plan,
        startDate: new Date(tempFormulatePlan.startDate),
        endDate: tempFormulatePlan.endDate
          ? new Date(tempFormulatePlan.endDate)
          : "",
        meals: tempFormulatePlan.meals,
        snacks: tempFormulatePlan.snacks,
        days: tempFormulatePlan.days,
      });
    }
  }, []);

  useEffect(() => {
    if (!isFormValidated) return;
    // debugger
    localStorage.setItem("formulatePlan", JSON.stringify(formulatePlan));
    history.push("/create-meal-plan/choose-vendor");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValidated]);

  const pagePath = [
    {
      path: "/create-meal-plan",
      label: "Create Meal Plan",
    },
    {
      path: "",
      label: "Formulate Your Plan",
    },
  ];

  const handleChange = (e, n, v) => {
    const name = e?.target.name || n;
    const value = e?.target.value || v;

    setFormulatePlan((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDaysChange = (val) => {
    if (val.length > 4) {
      selectDays.current.classList.remove("days-error");
    }
    handleChange(null, "days", val);
  };

  const handleStartDate = (date) => {
    setFormulatePlan((prevValues) => ({
      ...prevValues,
      startDate: date,
    }));
  };
  const handleEndDate = (date) => {
    setFormulatePlan((prevValues) => ({
      ...prevValues,
      endDate: date,
    }));
  };
  useEffect(() => {
    fetchGoals();
  }, []);
  return (
    <Container className="page-wrapper">
      <GHBreadcrumb pathArray={pagePath} />
      <HeaderTag tag="h1" className="profile-title">
        <span className="color-orange">3 simple steps</span> to complete your
        plan
      </HeaderTag>
      <StepsProgress progress="66" stepIndex={1} />
      <Container className="profile-form gh-form">
        <HeaderTag tag="h2" className="profile-form-subtitle">
          Hi James,
        </HeaderTag>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form-profile formulate-plan"
        >
          <Row>
            <Col lg={6}>
              <HeaderTag tag="h3" className="profile-form-title">
                Formulate your plan
              </HeaderTag>
            </Col>
            <Col lg={6} className="d-flex justify-content-lg-end">
              <Form.Group className="mb-5 goal-wrapper" controlId="goal">
                <Form.Label className="ico-goal">Goal -</Form.Label>
                <Form.Select
                  name="goal"
                  value={buildProfile.goal}
                  aria-label="Default select example"
                  required
                >
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
          </Row>
          <Row>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="plan">
                <Form.Label>Plan For*</Form.Label>
                <Form.Select
                  name="plan"
                  value={formulatePlan.plan}
                  onChange={handleChange}
                  aria-label="Plan for"
                  required
                >
                  <option value="1 Week">1 Week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="3 weeks">3 Weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2 month">2 month</option>
                  <option value="3 month">3 month</option>
                  <option value="4 month">4 month</option>
                  <option value="5 month">5 month</option>
                  <option value="6 month">6 month</option>, 3 weeks , 1 Month ,
                  2 Months ,3 Months ,4 Months, 5 Months ,6 Months
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select plan.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="from-date">
                <Form.Label>From Date*</Form.Label>
                <DatePicker
                  className="form-control"
                  placeholderText="DD/MM/YYYY"
                  selected={formulatePlan.startDate}
                  onChange={(date) => handleStartDate(date)}
                  selectsStart
                  startDate={formulatePlan.startDate}
                  minDate={formulatePlan.startDate}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please select start date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-5" controlId="from-date">
                <Form.Label>To Date*</Form.Label>
                <DatePicker
                  className="form-control"
                  placeholderText="DD/MM/YYYY"
                  selected={formulatePlan.endDate}
                  onChange={(date) => handleEndDate(date)}
                  selectsEnd
                  endDate={formulatePlan.endDate}
                  minDate={formulatePlan.startDate}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please select end date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Container bsPrefix="make-your-combo--wrapper">
            <HeaderTag tag="h3" className="make-your-combo--title">
              Make your own combo
            </HeaderTag>
            <div className="meal-types--wrapper">
              <p className="meal-types--title">
                Meal = <span className="ico-meal breakfast">Breakfast</span>
                <div className="meal-type-text-or">or</div>
                <span className="ico-meal lunch">Lunch</span>
                <div className="meal-type-text-or">or</div>
                <span className="ico-meal dinner">Dinner</span>
              </p>
              <Form.Group
                className="meal-types--numbers-dropdown"
                controlId="meal"
              >
                <Row className="meal-types--numbers">
                  <Col md={6} lg={4}>
                    <Form.Label className="meal-types--numbers-text">
                      Please select number of <strong>meals</strong> in a day
                    </Form.Label>
                  </Col>
                  <Col md={6} lg={4}>
                    <Form.Select
                      name="meals"
                      value={formulatePlan.meals}
                      onChange={handleChange}
                      aria-label="Select meals"
                      required
                    >
                      <option value="">Meals*</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select number of meals.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>

              <HeaderTag className="meal-types--title">
                Snack = <span className="ico-meal snack1">Snack 1</span>
                <div className="meal-type-text-or">or</div>
                <span className="ico-meal lunch">Snack 2</span>
              </HeaderTag>
              <Form.Group
                className="meal-types--numbers-dropdown"
                controlId="snack"
              >
                <Row className="meal-types--numbers">
                  <Col md={6} lg={4}>
                    <Form.Label className="meal-types--numbers-text">
                      Please select number of <strong>snacks</strong> in a day
                    </Form.Label>
                  </Col>
                  <Col md={6} lg={4}>
                    <Form.Select
                      name="snacks"
                      value={formulatePlan.snacks}
                      onChange={handleChange}
                      aria-label="Select snacks"
                      required
                    >
                      <option value="">Snacks*</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select number of snacks.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>

              <HeaderTag className="meal-types--days-title">
                Select days in a week
              </HeaderTag>
              <ToggleButtonGroup
                ref={selectDays}
                type="checkbox"
                value={formulatePlan.days}
                onChange={handleDaysChange}
              >
                {days.map((day) => (
                  <ToggleButton
                    key={day.value}
                    className="select-days"
                    id={`tbg-btn-${day.value}`}
                    value={day.value}
                  >
                    {day.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <Form.Control.Feedback type="invalid">
                Please select minimun 5 days.
              </Form.Control.Feedback>
            </div>
          </Container>

          <Row>
            <Col md={8}>
              <div className="selection-wrapper">
                <HeaderTag className="profile-form-selection">
                  Your Selection
                </HeaderTag>
                <div
                  className="box-wrapper"
                  style={{
                    fontWeight: "700",
                    color: "coral",
                  }}
                >
                  <div className="box meals">
                    <img
                      src="/assets/icons/food-tray.svg"
                      alt=""
                      className="icon-selection"
                    />
                    {formulatePlan.meals && (
                      <p>
                        <span className="meal-no"></span>
                        {formulatePlan.meals} x Meal
                        {formulatePlan.meals > 1 && "s"}
                      </p>
                    )}
                    {formulatePlan.snacks && (
                      <p>
                        <span className="snack-no"></span>
                        {formulatePlan.snacks} x Snack
                        {formulatePlan.snacks > 1 && "s"}
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      marginTop: "5vw",
                      color: "black",
                    }}
                  >
                    +
                  </span>
                  <div className="box snacks">
                    <img
                      src="/assets/icons/ico_calendar-black.svg"
                      alt=""
                      className="icon-selection"
                    />
                    {formulatePlan.plan && <p>{formulatePlan.plan}</p>}
                  </div>
                  <span
                    style={{
                      marginTop: "5vw",
                      color: "black",
                    }}
                  >
                    +
                  </span>

                  <div className="box days">
                    {formulatePlan.days.length > 0 && (
                      <p>
                        {formulatePlan.days.length &&
                          formulatePlan.days.map((day) => (
                            <span key={day} className="selected-days">
                              {days[day - 1].label}
                            </span>
                          ))}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-sm-end">
              <Button type="submit" className="cta cta--reverse d-inline-block">
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default FormulatePlan;
