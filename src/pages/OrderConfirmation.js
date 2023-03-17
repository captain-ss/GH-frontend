import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import GHBreadcrumb from "../components/GHBreadcrumb/GHBreadcrumb";
import HeaderTag from "../components/global/HeaderTag/HeaderTag";
import "../styles/components/order-confirmation.scss";
import axios from "axios";

function VendorOrderConfirmation() {
  const [consumerAdditionalInfo, setConsumerAdditionalInfo] = useState("");
  const [consumerAppliedCode, setConsumerAppliedCode] = useState("");
  const [consumerDeliveryTime, setConsumerDeliveryTime] = useState("");
  const [consumerNameOfPlace, setConsumerNameOfPlace] = useState("");
  const [consumerFlat, setConsumerFlat] = useState("");
  const [consumerLandmark, setConsumerLandmark] = useState("");
  const [consumerAdress, setConsumerAdress] = useState("");
  const [consumerCity, setConsumerCity] = useState("");
  const [consumerState, setConsumerState] = useState("");
  const [consumerCountry, setConsumerCountry] = useState("");
  const [consumerZipCode, setConsumerZipCode] = useState("");
  const [consumerContactNum1, setConsumerContactNum1] = useState("");
  const [consumerContactNum2, setConsumerContactNum2] = useState("");
  
  const history = useHistory();
  const selectTime = useRef();

  const [timeSlot, setTimeSlot] = useState("");
  const buildProfile = JSON.parse(localStorage.getItem("buildProfile"));
  const formulatePlan = JSON.parse(localStorage.getItem("formulatePlan"));
  const clickedItem = JSON.parse(localStorage.getItem("itemclicked"));
  // const dateOptions = { day: 'numeric', month: 'shot', year: 'numeric' };
  const days = [
    { label: "Sunday", value: "1" },
    { label: "Monday", value: "2" },
    { label: "Tuesday", value: "3" },
    { label: "Wednesday", value: "4" },
    { label: "Thursday", value: "5" },
    { label: "Friday", value: "6" },
    { label: "Saturday", value: "7" },
  ];
  const [validated, setValidated] = useState(false);
  const [isFormValidated, setFormValidated] = useState(false);

  const pagePath = [
    {
      path: "/create-meal-plan",
      label: "Create Meal Plan",
    },
    {
      path: "",
      label: "Order Confirmation",
    },
  ];

  const timeSlots = [
    { label: "3am - 8am", value: "3-8" },
    { label: "8am - 12pm", value: "8-12" },
    { label: "12pm - 6pm", value: "12-6" },
    { label: "6pm - 10pm", value: "6-10" },
  ];

  const handleSubmit = async(event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (timeSlot === "") {
      selectTime.current.classList.add("timeslot-error");
      // return;
    } else {
      selectTime.current.classList.remove("timeslot-error");
      setFormValidated(form.checkValidity());
    }
    setValidated(true);
    try {
      const res=await axios.post( `${process.env.REACT_APP_INIL_URL}/meals/non_userAddMeal`,{
        consumerName:  buildProfile.fullname,
        consumerAdditionalInfo,
        consumerAppliedCode,
        consumerDeliveryTime:timeSlot,
        consumerNameOfPlace,
        consumerFlat,
        consumerLandmark,
        consumerAdress,
        consumerCity,
        consumerState,
        consumerCountry,
        consumerZipCode,
        consumerContactNum1,
        consumerContactNum2
        ,
        consumerPlanFor:formulatePlan.plan,
        no_ofMealConsumerNeed:formulatePlan.meals,
        no_ofSnacksConsumerNeed:formulatePlan.snacks,
        daysInweekConsumeradded:"sunday to monday",
        consumerGoal:buildProfile.goal,
        consumerGender:buildProfile.gender,
        vendorName:clickedItem.itemName,
        vendorId:clickedItem.itemId,
        packageCost:clickedItem.cost,
        consumerfromDate:formulatePlan.startDate,
        consumerToDate:formulatePlan.endDate,
        consumerEmail:buildProfile.email
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (val) => {
    val !== "" && selectTime.current.classList.remove("timeslot-error");
    setTimeSlot(val);
  };

  useEffect(() => {
    if (!isFormValidated) return;
    // debugger
    // localStorage.setItem('formulatePlan', JSON.stringify(formulatePlan));
    history.push("/create-meal-plan/thank-you");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValidated]);

  useEffect(() => {
    document.dispatchEvent(new Event("viewChanged"));
  }, []);

  // const userBuildProfile = JSON.parse(
  //   window.localStorage.getItem("buildProfile")
  // );
// const 

  return (
    <Container
      style={{
        marginTop: "0vw",
      }}
      className="page-wrapper order-confirmation--wrapper"
    >
      <GHBreadcrumb pathArray={pagePath} />
      <Row>
        <Col md={6}>
          <div className="order-summary--wrapper">
            <HeaderTag className="order-summary--title">
              Order Summary
              <span className="order-number">
                Order ID - <em>R6H12</em>
              </span>
            </HeaderTag>
            <Container>
              <Row>
                <Col sm={4}>
                  <img
                    src="/assets/vendor-logos/retailer-logo.png"
                    className="vendor-image"
                    alt="Vendor Name"
                  />
                  <HeaderTag tag="h3" className="vendor-name">
                    Vendor
                  </HeaderTag>
                </Col>
                <Col sm={8} className="text-sm-end">
                  <p className="vendor-prop">
                    <img
                      className="me-2"
                      src="/assets/icons/food-delivery.svg"
                      alt="delivery"
                    />
                    <span className="">Preference - </span>
                    <img
                      className="me-2"
                      src="/assets/icons/non-veg-ico.svg"
                      alt="delivery"
                    />
                    <span className="">Non-veg</span>
                  </p>
                  <p className="vendor-prop">
                    <img
                      className="me-2"
                      src="/assets/icons/goal.svg"
                      alt="goals"
                    />
                    <span className="">Goal - {buildProfile.goal}</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className="box meals">
                    <img
                      src="/assets/icons/food-tray.svg"
                      alt="meal"
                      className="icon icon-meal"
                    />
                    {formulatePlan.meals && (
                      <p>
                        {formulatePlan.meals} x Meal
                        {formulatePlan.meals > 1 && "s"}
                      </p>
                    )}
                    {formulatePlan.snacks && (
                      <p>
                        {formulatePlan.snacks} x Meal
                        {formulatePlan.snacks > 1 && "s"}
                      </p>
                    )}
                  </div>
                </Col>
                <Col sm={8}>
                  <div className="box days">
                    <p className="title">
                      <img
                        src="/assets/icons/time.svg"
                        alt="day"
                        className="icon icon-days"
                      />{" "}
                      Days
                    </p>
                    {/* <p>Monday Tuesday</p> */}
                    {formulatePlan.days.length > 0 && (
                      <p>
                        {formulatePlan.days.length &&
                          formulatePlan.days.map((day) => (
                            <span key={day} className="selected-days">
                              {days[day - 1].label}{" "}
                            </span>
                          ))}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} lg={4}>
                  <div className="box start-date">
                    <p className="title">
                      <img
                        src="/assets/icons/calendar.svg"
                        alt=""
                        className="icon icon-calendar"
                      />{" "}
                      Start Date
                    </p>
                    {formulatePlan.startDate && (
                      <p className="text">
                        {new Date(formulatePlan.startDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </Col>
                <Col xs={6} lg={4}>
                  <div className="box end-date">
                    <p className="title">
                      <img
                        src="/assets/icons/calendar.svg"
                        alt=""
                        className="icon icon-calendar"
                      />{" "}
                      End Date
                    </p>
                    {formulatePlan.endDate && (
                      <p className="text">
                        {new Date(formulatePlan.endDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </Col>
                <Col xs={6} lg={4}>
                  <div className="box duration">
                    <p className="title">
                      <img
                        src="/assets/icons/time.svg"
                        alt="duration"
                        className="icon icon-duration"
                      />{" "}
                      Duration
                    </p>
                    {formulatePlan.plan && (
                      <p className="text">{formulatePlan.plan}</p>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6}>
          <div className="pricing-details--wrapper">
            <HeaderTag className="pricing-details--title">
              Pricing Details
            </HeaderTag>
            <p className="text sub-total">
              Sub Total<span className="sub-total-price">AED 600</span>
            </p>
            <p className="text delivey">
              Delivery Charge<span className="delivery-price">AED 10</span>
            </p>
            <p className="text packaging">
              Packaging Charge<span className="packaging-price">AED 10</span>
            </p>
            <p className="text discount">
              Discount<span className="discount-price">-</span>
            </p>
            <HeaderTag className="total-amount">
              Amount Payable<span className="total-amount-price">AED 620</span>
            </HeaderTag>

            <Form className="coupon-wrapper">
              <Row>
                <Col xs={8} lg={9}>
                  <Form.Control
                    onChange={(e) => {
                      setConsumerAppliedCode(e.target.value);
                    }}
                    placeholder="Promo Code"
                  />
                </Col>
                <Col xs={4} lg={3}>
                  <Button className="cta cta--reverse btn-coupon">Apply</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
      <Container bsPrefix="additional-info">
        <Form.Group className="mb-3" controlId="additional-info">
          <Form.Label className="additional-title">
            Additional Information
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              setConsumerAdditionalInfo(e.target.value);
            }}
            as="textarea"
            rows={3}
            placeholder="Allergies / Preferences"
          />
        </Form.Group>
      </Container>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="delivery--wrapper"
      >
        <HeaderTag tag="h2" className="delivery-title">
          Delivery
        </HeaderTag>

        <Row className="align-items-end">
          <Col xs={12}>
            <HeaderTag className="time-slot">Time slots for delivery</HeaderTag>
            <ToggleButtonGroup
              ref={selectTime}
              className="mb-3 time-options"
              defaultValue={timeSlot}
              name="timeslot"
              type="radio"
              onChange={handleChange}
            >
              {timeSlots.map((time) => (
                <ToggleButton
                  key={time.value}
                  className="select-time"
                  id={`tbg-btn-${time.value}`}
                  value={time.value}
                >
                  {time.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Form.Control.Feedback type="invalid">
              Please select time slot for delivery.
            </Form.Control.Feedback>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="place">
              <Form.Label>Name of Place</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerNameOfPlace(e.target.value);
                }}
                name="place"
                placeholder="Place"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Place.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="flat">
              <Form.Label className="sr-only">Flat</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerFlat(e.target.value);
                }}
                name="flat"
                placeholder="Flat"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Flat Number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="landmark">
              <Form.Control
                onChange={(e) => {
                  setConsumerLandmark(e.target.value);
                }}
                name="landmark"
                placeholder="Landmark"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Landmark.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3 form-address" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerAdress(e.target.value);
                }}
                name="address"
                placeholder="Address"
                required
              />
              <img
                src="/assets/icons/location.svg"
                alt="pointer"
                className="icon-location"
              />
              <Form.Control.Feedback type="invalid">
                Please enter Address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerCity(e.target.value);
                }}
                name="city"
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter City.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerState(e.target.value);
                }}
                name="state"
                placeholder="State"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter State.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerCountry(e.target.value);
                }}
                name="country"
                placeholder="Country"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Country.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="zip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="number"
                name="zip"
                placeholder="Zip Code"
                onChange={(e) => {
                  setConsumerZipCode(e.target.value);
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Zip code.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="contact1">
              <Form.Label>Contact No.1</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerContactNum1(e.target.value);
                }}
                type="number"
                name="contact1"
                placeholder="Contact No.1"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter Contact Number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3" controlId="contact2">
              <Form.Label>Contact No.2</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setConsumerContactNum2(e.target.value);
                }}
                name="contact2"
                placeholder="Contact No.2"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="cta cta--black btn-submit"
              as="input"
              type="submit"
              value="Make Payment"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default VendorOrderConfirmation;
