import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTag from "../global/HeaderTag/HeaderTag";
import "./VendorHeader.scss";

function VendorHeader() {
  const detailed = JSON.parse(window.localStorage.getItem("itemclicked"));
  const buildProfile = JSON.parse(window.localStorage.getItem("buildProfile"));

  return (
    <Container className="vendor-header">
      <Row className="mb-4">
        <Col md={4}>
          <div className="vender-image text-center">
            <img
              className="img-fluid rounded-16"
              src="/assets/vendor-details-image.png"
              // src={detailed.files[0]}

              alt="vendor"
            />
          </div>
        </Col>
        <Col md={8}>
          <div className="d-flex align-items-baseline align-items-md-center mb-3">
            <div className="me-2 mb-2 mb-md-0">
              <img src="/assets/vendor-logos/retailer-logo.png" alt="logo" />
            </div>
            <HeaderTag tag="h2" className="fw-bold secondary fs-3 me-3">
              {detailed.itemName}
            </HeaderTag>
            <ReactStars
              classNames="mb-2 vendor-rating"
              count={5}
              size={10}
              edit={false}
              value={4}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#2FAC66"
            />
          </div>

          <div className="vendor-location-plan">
            <p className="vendor-prop">
              <img
                className="me-2"
                src="/assets/icons/pin-point.svg"
                alt="pin point"
              />
              <span className="fw-bold">{buildProfile.location}</span>
            </p>
            <p className="vendor-prop">
              <img className="me-2" src="/assets/icons/goal.svg" alt="goals" />
              <span className="">
                Goal - <strong>{buildProfile.goal}</strong>
              </span>
            </p>
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
              <span className="">
                <b>Non-veg</b>
              </span>
            </p>
          </div>

          <p className="highlight">
            Highlights- <strong>Mediterranean , Lebanese , Continental</strong>
          </p>

          <p className="desc">description : {detailed.description}</p>

          <Link
            onClick={() => {}}
            to="/create-meal-plan/order-confirmation"
            className="cta cta--border"
          >
            Confirm Order
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default VendorHeader;
