import React from "react";
import VendorDashboardLeft from "../components/vendorDashboardLeft";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import vector1 from "../images/Vector1.svg";

const VendorDashboardTags = () => {
  return (
    <div className="w-100 d-flex">
      <VendorDashboardLeft />
      <div className="vendor-dashboard-main">
        <h5>Vendor Dashboard</h5>
        <div className="mt-5 mb-4">
          <b>List of Tags</b>
          <InputGroup
          style={{
            width:"60%",
          }}
          >
            <div className="d-flex mt-4">

            <Form.Control
              type="text"
              placeholder="Search..."
              
              />
              {/* <i class="fas fa-search" /> */}
              </div>
          </InputGroup>
          <Table className="mt-2">
            <thead>
              <tr>
                <th>Type <img src={vector1} alt="" /></th>
                <th>Name <img src={vector1} alt="" /></th>
                <th>Date Created</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
               
              </tr>
              <tr>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
               
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardTags;
