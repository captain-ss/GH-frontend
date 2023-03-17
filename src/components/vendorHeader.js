import React from "react";

function Header({side}) {
    return (
        <div className="d-flex flex-column">
            <div className="container-fluid user-header align-items-center justify-content-between w-100
        pl-5 pr-3 pb-3  pt-3 d-flex">
                <i className="fas fa-bars hamburger" onClick={side}></i>
                <div className="d-flex flex-row justify-content-between align-items-center user-header-innner">
                    <a className="user-a hover-pointer">
                        <img className="me-1" style={{ width: "11%" }} src="/assets/icons/search.svg" alt="search" />
                        <span>Search</span>
                    </a>
                    <a className="user-a hover-pointer">
                        <img className="me-1" style={{ width: "11%" }} src="/assets/icons/bell.svg" alt="bell" />
                        <span>Notifications</span>
                    </a>
                    <a onClick={handleLogout} className="user-a hover-pointer">
                        <img className="me-1" style={{ width: "11%" }} src="/assets/icons/user.svg" alt="user" />
                        <span>Signout</span>
                    </a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Header;