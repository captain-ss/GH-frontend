import React, { useState, useEffect } from "react";
import { Container, Tab, Row, Nav, Col, Accordion } from "react-bootstrap";
import axios from "axios";
function BreadCrumbs() {
  return (
    <Container className="my-4 pb-5">
      <ul className="list-group d-inline">
        <li className="d-inline">
          <a className="me-2" href="/">
            <img src="/assets/icons/home.svg" alt="home" />
          </a>
        </li>
        <li className="d-inline">
          <a href="#">/ Help &amp; Support</a>
        </li>
      </ul>
    </Container>
  );
}
const AccorditionComponent = ({ item, index }) => {
  console.log(item);
  return (
    <Accordion.Item
      className="border-top-0 border-end-0 border-start-0"
      eventKey={index}
    >
      <Accordion.Header>{item.question}</Accordion.Header>
      <Accordion.Body>
        {item.answer}.
      </Accordion.Body>
    </Accordion.Item>
  );
};

function Section1() {
  const arr1 = [1, 2, 3];

  const [dataQueAns, setDataQueAns] = useState([]);
  const fetchQueAns = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_INIL_URL}/faq/viewFaq?category=vendor&pageNumber=1&pageSize=4`
      );
      console.log(res.data.success.data);
      setDataQueAns(res.data.success.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQueAns();
  }, []);
  return (
    <Container className="mb-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="px-0" sm={3}>
            <Nav variant="pill" className="flex-column support-tabs">
              <Nav.Item className="mb-4">
                <Nav.Link
                  className="border border-3 py-3 pointer"
                  eventKey="first"
                >
                  Customer FAQ’s <span className="right-arrow"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-4">
                <Nav.Link
                  className="border border-3 py-3 pointer"
                  eventKey="second"
                >
                  Vendor issuses <span className="right-arrow"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-4">
                <Nav.Link
                  className="border border-3 py-3 pointer"
                  eventKey="three"
                >
                  Legal <span className="right-arrow"></span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="py-2 border-green-100" sm={9}>
            <Tab.Content className="px-5">
              <Tab.Pane eventKey="first">
                <h1 className="fw-bold fs-4 mt-2">Customer FAQ’s</h1>
                <Accordion className="support-accord">
                  {dataQueAns.map((item, index) => {
                    return <AccorditionComponent index={index} item={item} />;
                  })}
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Accordion className="support-accord">
                  {" "}
                  {dataQueAns.map((item, index) => {
                    return <AccorditionComponent index={index} item={item} />;
                  })}
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <Accordion className="support-accord">
                  {" "}
                  {dataQueAns?.map((item, index) => {
                    return <AccorditionComponent index={index} item={item} />;
                  })}
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

function support() {
  return (
    <>
      <BreadCrumbs />
      <Section1 />
    </>
  );
}

export default support;
