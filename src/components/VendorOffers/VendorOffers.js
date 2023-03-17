import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function VendorOffers() {
  return <Container>
    <Row>
      <Col className="mb-4" lg={4} md={6} >
        <div className="offer-card-bg p-3 hover-pointer">
          <div className="border-left-right text-center py-2">
            <img src="/assets/vendor-logos/retailer-logo.png" alt="vendor-logo" className="mb-3" />
            <h1 className="fs-4 fw-bold secondary">Upto 50% Off</h1>
            <p className="fs-12 fw-500 gray-200 mb-4">For your first Purchase</p>

            <span className="py-1 fs-5 fw-500 gray-200 px-4 border-dashed border-2 rounded-0 border-dark">
              UP50LIV
            </span>
          </div>
        </div>
      </Col>

      <Col className="mb-4" lg={4} md={6} >
        <div className="offer-card-bg p-3 hover-pointer">
          <div className="border-left-right text-center py-2">
            <img src="/assets/vendor-logos/retailer-logo.png" alt="vendor-logo" className="mb-3" />
            <h1 className="fs-4 fw-bold secondary">Todays special 50% Off</h1>
            <p className="fs-12 fw-500 gray-200 mb-4">BLACK FRIDAY SALE IS ON. AVAIL THE OFFER</p>

            <span className="py-1 fs-5 fw-500 gray-200 px-4 border-dashed border-2 rounded-0 border-dark">
              UP50LIV
            </span>
          </div>
        </div>
      </Col>

      <Col className="mb-4" lg={4} md={6} >
        <div className="offer-card-bg p-3 hover-pointer">
          <div className="border-left-right text-center py-2">
            <img src="/assets/vendor-logos/retailer-logo.png" alt="vendor-logo" className="mb-3" />
            <h1 className="fs-4 fw-bold secondary">AED 100 Off</h1>
            <p className="fs-12 fw-500 gray-200 mb-4">On your second month of subscription</p>

            <span className="py-1 fs-5 fw-500 gray-200 px-4 border-dashed border-2 rounded-0 border-dark">
              UP50LIV
            </span>
          </div>
        </div>
      </Col>

      <Col className="mb-4" lg={4} md={6} >
        <div className="offer-card-bg p-3 hover-pointer">
          <div className="border-left-right text-center py-2">
            <img src="/assets/vendor-logos/retailer-logo.png" alt="vendor-logo" className="mb-3" />
            <h1 className="fs-4 fw-bold secondary">Upto 50% Off</h1>
            <p className="fs-12 fw-500 gray-200 mb-4">For keto diet plan with non-veg prefernce</p>

            <span className="py-1 fs-5 fw-500 gray-200 px-4 border-dashed border-2 rounded-0 border-dark">
              UP50LIV
            </span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>;
}

export default VendorOffers;