import React from "react";
import Logo from "Logo.svg";

function SideBar({ side, sideClick }) {
  return (
    <div
      className="d-flex flex-column align-items-center w-100 mt-5"
      style={{ position: "relative" }}
    >
      <i className="fas fa-times close-btn" onClick={sideClick}></i>
      <img src={Logo} alt="" className="mb-4" />
      <a className="sidebar-outer sidebar-active-outer">
        <i className="far fa-user sidebar-icon active"></i>
        <span style={{ display: !side ? "flex" : "none" }}>User</span>
      </a>
      <a className="sidebar-outer">
        <i className="fas fa-user-cog  sidebar-icon"></i>
        <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
      </a>
      <a className="sidebar-outer">
        <i className="fas fa-clipboard-list sidebar-icon"></i>
        <span style={{ display: !side ? "flex" : "none" }}>Summary</span>
      </a>
      <a className="sidebar-outer">
        <i className="fas fa-user-md sidebar-icon"></i>
        <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
      </a>
      <a className="sidebar-outer">
        <i className="fas fa-receipt   sidebar-icon"></i>
        <span style={{ display: !side ? "flex" : "none" }}>Invoice</span>
      </a>
      <a className="sidebar-outer">
        {" "}
        <i className="fas fa-sign-out-alt  sidebar-icon"></i>
        <span style={{ display: !side ? "flex" : "none" }}>Logout</span>
      </a>
    </div>
  );
}

export default SideBar;
