import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import HeaderTag from "../components/global/HeaderTag/HeaderTag";
import StepsProgress from "../components/StepsProgress/StepsProgress";
import GHBreadcrumb from "../components/GHBreadcrumb/GHBreadcrumb";
import VendorSnapshot from "../components/VendorSnapshot/VendorSnapshot";
import "../styles/components/choose-vendor.scss";
import axios from "axios";

function ChooseVendor() {
  const buildProfile = JSON.parse(localStorage.getItem("buildProfile"));
  const [popUpMoreState, setpopUpMoreState] = useState(true);
  const [vendorOptions, setVendorOptions] = useState({
    location: "",
    goal: "",
  });
  // const [vendors, setVendors] = useState('');
  const [vendors, setVendors] = useState([]);
  const vendorTags = JSON.parse(window.localStorage.getItem("vendorTags"));
  const [goals, setGoals] = useState();

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
  const vendorGetReq = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_INIL_URL}/vendor/viewItem?pageSize=6&pageNumber=1`
      );
      console.log(res.data.success.data);
      setVendors(res.data.success.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    vendorGetReq();
    fetchGoals();
  }, []);

  const [sort, setSort] = useState(null);

  useEffect(() => {
    document.dispatchEvent(new Event("viewChanged"));

    if (buildProfile) {
      setVendorOptions({
        location: buildProfile.location,
        goal: buildProfile.goal,
      });
    }
  }, []);

  const pagePath = [
    {
      path: "/create-meal-plan",
      label: "Create Meal Plan",
    },
    {
      path: "",
      label: "Choose Vendor",
    },
  ];

  const handleChange = (e, n, v) => {
    const name = e?.target.name || n;
    const value = e?.target.value || v;

    setSort((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Container className="page-wrapper">
      <GHBreadcrumb pathArray={pagePath} />
      <HeaderTag tag="h1" className="profile-title">
        <span className="color-orange">3 simple steps</span> to complete your
        plan
      </HeaderTag>
      <StepsProgress progress="85" stepIndex={2} />
      <Container className="profile-form choose-vendor gh-form">
        <Row>
          <Col md={4} xl={3}>
            <div className="profile-sidebar">
              <HeaderTag tag="h2" className="profile-vendor-title">
                Vendor
              </HeaderTag>
              <div className="mb-4">
                <HeaderTag tag="h3" className="sidebar-title">
                  Sort By:
                </HeaderTag>
                <Form.Group className="mb-3" controlId="popularity">
                  <Form.Label className="sort-title">Popularity</Form.Label>
                  <Form.Select
                    name="popularity"
                    value=""
                    onChange={handleChange}
                    aria-label="Default select example"
                  >
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                  </Form.Select>
                </Form.Group>

                <HeaderTag className="mb-1 sort-title">
                  Delievery Rating
                </HeaderTag>
                <ReactStars
                  classNames="mb-2 gh-rating"
                  count={5}
                  onChange={ratingChanged}
                  size={18}
                  isHalf={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#2FAC66"
                />

                <HeaderTag className="mb-1 sort-title">Recently</HeaderTag>
                <Form.Select
                  name="recently"
                  value=""
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option value="newly-added">Newly Added</option>
                </Form.Select>
              </div>

              <div className="mb-4">
                <HeaderTag tag="h3" className="sidebar-title">
                  Price
                </HeaderTag>
                <Form.Group className="price-options">
                  <Form.Check
                    className="mb-2"
                    name="price"
                    id="u2000"
                    label="Under 2000 AED"
                    value="u2000"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="price"
                    id="1000_2000"
                    label="1000 - 2000 AED"
                    value="1000_2000"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="price"
                    id="2000_3000"
                    label="2000 - 3000 AED"
                    value="2000_3000"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="price"
                    id="o3000"
                    label="Over 3000 AED"
                    value="o3000"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="mb-4">
                <HeaderTag tag="h3" className="sidebar-title">
                  Dietary Preferences
                </HeaderTag>
                <Form.Group className="diet-options">
                  <Form.Check
                    className="mb-2"
                    name="diet"
                    id="veg"
                    label="Veg (100)"
                    value="veg"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="diet"
                    id="non-veg"
                    label="Non Veg (230)"
                    value="non-veg"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="diet"
                    id="vegan"
                    label="Vegan"
                    value="vegan"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="diet"
                    id="detox"
                    label="Detox"
                    value="detox"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="mb-2"
                    name="diet"
                    id="bon-brath"
                    label="Bon Brath"
                    value="bon-brath"
                    onChange={handleChange}
                  />
                  <div
                    style={{
                      color: "coral",
                      marginLeft: "1.5vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setpopUpMoreState(!popUpMoreState);
                    }}
                  >
                    +150 more
                  </div>
                  <div
                    style={{
                      overflow: "visible",
                      width: "0vw",
                      height: "0vw",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        zIndex: "30",
                        width: "60vw",
                        height: "40vw",
                        bottom: "20vw",
                        display: popUpMoreState ? "none" : "block",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                        padding: "2vw",
                      }}
                    >
                      <div
                        style={{
                          width: "50vw ",
                          display: "inline-block",
                          fontWeight: "700",
                          fontSize: "1.5vw",
                        }}
                      >
                        Tags{" "}
                      </div>
                      <div
                        style={{
                          fontWeight: "700",
                          fontSize: "1.5vw",
                          display: "inline-block",
                          transform: "rotate(45deg)",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setpopUpMoreState(!popUpMoreState);
                        }}
                      >
                        +
                      </div>
                      <input type="text" placeholder="Search Tags" />
                      <br />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          height: "32vw",
                          overflowX: "scroll",
                          overflowY: "hidden",
                        }}
                      >
                        {vendorTags?.map((item, index) => {
                          return (
                            <Form.Check
                              key={index}
                              style={{
                                fontWeight: "700",
                              }}
                              className="mb-2"
                              name="moreTags"
                              id={item.tagName}
                              label={item.tagName}
                              value={item.tagName}
                              onChange={handleChange}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Form.Group>
              </div>
            </div>
          </Col>
          <Col md={8} xl={9}>
            <div className="profile-vendor-list">
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-4" controlId="location">
                    <Form.Label className="sr-only">Location</Form.Label>
                    <Form.Select
                      name="location"
                      defaultValue={buildProfile.location}
                      onChange={handleChange}
                      aria-label="Default select example"
                    >
                      <option value="">Location*</option>
                      <option value="gujrat">gujrat</option>
                      <option value="rampura">rampura </option>
                      <option value="lucknow">lucknow</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="goal-wrapper" controlId="goal">
                    <Form.Label className="sr-only">Goal</Form.Label>
                    <Form.Select
                      name="goal"
                      className="ico-goal"
                      value={buildProfile.goal}
                      onChange={(e)=>{
                        handleChange(e)
                        console.log(e.target.value);
                      }}
                      aria-label="Default select example"
                    >
                      <option value="">Goal*</option>
                      {goals?.map((item, index) => {
                        return (
                          <option
                          key={index}
                          value={item.goalsName}>
                            {item.goalsName}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {vendors.map((vendor, idx) => (
                  <Col key={idx} lg={6} xl={4}>
                    <VendorSnapshot vendorData={vendor} />
                  </Col>
                ))}
              </Row>
              <Button
                className="cta cta--reverse mx-auto mt-5"
                onClick={() => {}}
              >
                Show more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ChooseVendor;

// {
//   images: [
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//   ],
//   title: "Vendor Name",
//   rating: 3,
//   price: 400,
//   cta: "/create-meal-plan/vendor-details/vendor",
// },
// {
//   images: [
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//   ],
//   title: "Vendor Name",
//   rating: 3,
//   price: 400,
//   cta: "/create-meal-plan/vendor-details/vendor",
// },
// {
//   images: [
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//   ],
//   title: "Vendor Name",
//   rating: 3,
//   price: 400,
//   cta: "/create-meal-plan/vendor-details/vendor",
// },
// {
//   images: [
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//   ],
//   title: "Vendor Name",
//   rating: 3,
//   price: 400,
//   cta: "/create-meal-plan/vendor-details/vendor",
// },
// {
//   images: [
//     {
//       img: {
//         src: "/assets/signup-left.jpg",
//         alt: "Vendor Image",
//       },
//     },
//   ],
//   title: "Vendor Name",
//   rating: 3,
//   price: 400,
//   cta: "/create-meal-plan/vendor-details/vendor",
// },
// ]);
