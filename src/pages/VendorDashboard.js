import React from "react";
import VendorDashboardLeft from "../components/vendorDashboardLeft";
import Table from "react-bootstrap/Table";
import "../styles/components/vendorDashboard.css";
// import VendorHeader from './VendorHeader';
// import {Container, Nav, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard1 from "../images/dashboard1.svg";
import Group8407 from "../images/Group8407.svg";
import onlineorder2 from "../images/onlineorder2.svg";
import onlineorder1 from "../images/onlineorder1.svg";
import clipboard1 from "../images/clipboard1.svg";
import Arrow3 from "../images/Arrow3.svg";

import Form from "react-bootstrap/Form";


function VendorDashboard() {
 
  return (
    <div className="w-100 d-flex">
     <VendorDashboardLeft/>
      <div className="vendor-dashboard-main">
        <h5>Vendor Dashboard</h5>
        <div className="d-flex mt-4">
          <img src={Group8407} alt="" />

          <span>live healthy</span>
          <div
            style={{
              marginLeft: "18vw",
            }}
          >
            kichen location
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "18vw",
              }}
            >
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div>
            select month
            <Form.Select
              aria-label="Default select example"
              style={{
                width: "18vw",
                marginLeft: "2vw",
              }}
            >
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <div
          style={{
            color: "#A1A1A1",
          }}
        >
          Date as of 7th Jan 2022
        </div>
        <div className="vendorDashboard-boxes">
          <div className="vendorDashboard-box1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: ".4vw",
                  borderRadius: "2px",
                  backgroundColor: "#2FAC6680",
                  height: "fit-content",
                }}
              >
                <img src={onlineorder1} alt="" />
              </div>
              <div>
                <div>New Order</div>
                <h2
                  style={{
                    color: "#2FAC66",
                  }}
                >
                  200
                </h2>
              </div>
              <div className="vendorbox1-imagebox1">+ 12%</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2vw",
              }}
            >
              <div
                style={{
                  color: "#A1A1A1",
                }}
              >
                Compare to last month
              </div>
              <img src={Arrow3} alt="" />
            </div>
          </div>
          <div
            className="vendorDashboard-box1"
            style={{
              backgroundColor: "#ECFFF6",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: ".4vw",
                  borderRadius: "2px",
                  backgroundColor: "#2FAC6680",
                  height: "fit-content",
                }}
              >
                <img src={clipboard1} alt="" />
              </div>
              <div>
                <div>Live Orders</div>
                <h2
                  style={{
                    color: "#2FAC66",
                  }}
                >
                  200
                </h2>
              </div>
              <div className="vendorbox1-imagebox1">+ 12%</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2vw",
              }}
            >
              <div
                style={{
                  color: "#A1A1A1",
                }}
              >
                Compare to last month
              </div>
              <img src={Arrow3} alt="" />
            </div>
          </div>
          <div
            className="vendorDashboard-box1"
            style={{
              backgroundColor: "#ECFFF6",
            }}
          >
            <div>Top selling Plans</div>
            <div
              style={{
                display: "flex",
                gap: "2vw",
                marginTop: "1vw",
              }}
            >
              <div
                style={{
                  color: "#767676",
                  fontWeight: "500",
                }}
              >
                <div>Musle Gain</div>
                <div>Weight Loss</div>
                <div>Fat free</div>
              </div>
              <div>
                <div>120 orders</div>
                <div>120 orders</div>
                <div>120 orders</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-3 mt-5"
          style={{
            border: "1px solid #EFEFEF",
            boxShadow: "0px 4px 4px 2px rgba(219, 219, 219, 0.15)",
          }}
        >
          <div>
            <img src={onlineorder2} alt="" />
            Order Request
            <img src={Arrow3} alt="" />
          </div>

          <Table className="mt-2">
            <thead>
              <tr>
                <th>#id</th>
                <th>Date</th>
                <th>Meal Plan</th>
                <th>Start Date</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div
          className="p-3 mt-5"
          style={{
            border: "1px solid #EFEFEF",
            boxShadow: "0px 4px 4px 2px rgba(219, 219, 219, 0.15)",
          }}
        >
          <div>
            <img src={onlineorder2} alt="" />
            Live Orders
            <img src={Arrow3} alt="" />
          </div>

          <Table className="mt-2">
            <thead>
              <tr>
                <th>#id</th>
                <th>Date</th>
                <th>Meal Plan</th>
                <th>Combination</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="vendor-bottom-dashboard1">
          <div
          className="vendor-bottom-dashboard-box1"
          style={{
            width:"49%"
          }}
          ></div>
          <div
            className="p-3 mt-5"
            style={{
              border: "1px solid #EFEFEF",
              boxShadow: "0px 4px 4px 2px rgba(219, 219, 219, 0.15)",
                width:"49%"
            }}
          >
            <div>
              <img src={onlineorder2} alt="" />
              Tickets
            View All
            </div>

            <Table className="mt-2">
              <thead>
                <tr>
                  <th>#id</th>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
