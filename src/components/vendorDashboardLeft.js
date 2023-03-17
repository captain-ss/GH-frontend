import React from "react";
import "../styles/components/vendorDashboard.css";
// import VendorHeader from './VendorHeader';
// import {Container, Nav, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard1 from "../images/dashboard1.svg";
import vector1 from "../images/Vector1.svg";
import logo from "../../src/Logo.svg";

const VendorOptions = ({ item }) => {
  return (
    <div className="vendor-dashboard-wrapper">
      <img
        src={dashboard1}
        style={{
          marginRight: ".5vw",
        }}
        alt=""
      />
      {item.name}
    </div>
  );
};

const VendorDashboardLeft = () => {
  const array1 = [
    {
      name: "Help/Support",
      image: "dashboard1",
    },
    {
      name: "Account Settings",
      image: "dashboard1",
    },
    {
      name: "Account Settings",
      image: "dashboard1",
    },
    {
      name: "Discount offers",
      image: "dashboard1",
    },
    {
      name: "Reviews",
      image: "dashboard1",
    },
    {
      name: "Report Analysis",
      image: "dashboard1",
    },
  ];
  return (
    <div
      style={{
        width: "20vw",
        backgroundColor: "#C5FFDE80",
        color: "#626161",
      }}
    >
      <img
        src={logo}
        style={{
          width: "18vw",
        }}
        alt=""
      />

      <div className="vendor-dashboard-wrapper">
        <img
          src={dashboard1}
          style={{
            marginRight: ".5vw",
          }}
          alt=""
        />
        Dashboard
      </div>
      <div className="vendor-dashboard-wrapper">
        <img
          src={dashboard1}
          style={{
            marginRight: ".5vw",
          }}
          alt=""
        />
        Orders
        <img
          src={vector1}
          style={{
            marginLeft: "5vw",
          }}
          alt=""
        />
        <div
          style={{
            margin: "1.5vw",
          }}
        >
          <div>Order Request</div>
          <br />
          <div>Live Orders</div>
        </div>
      </div>
      <div className="vendor-dashboard-wrapper">
        <img
          src={dashboard1}
          style={{
            marginRight: ".5vw",
          }}
          alt=""
        />
        Menu
        <img
          src={vector1}
          style={{
            marginLeft: "5vw",
          }}
          alt=""
        />
        <div
          style={{
            margin: "1.5vw",
          }}
        >
          <div>Tags</div>
          <br />
          <div>Item</div>
          <br />
          <div>Meal Plan</div>
        </div>
      </div>

      {array1.map((item, index) => {
        return <VendorOptions key={index} item={item} />;
      })}
    </div>
  );
};

export default VendorDashboardLeft;
