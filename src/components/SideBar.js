import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SideBar() {
    function handleLogout() {
		window.sessionStorage.removeItem("userName", false);
		window.location.href = "/";
	}

    function SideBarContent({ side, sideClick }) {
        return (
            <div
                className="d-flex flex-column align-items-center w-100 mt-5"
                style={{ position: "relative" }}
            >
                {/* <i className="fas fa-times user-close-btn" onClick={sideClick}></i> */}
                <img
                    src="./assets/user-dashboard/miniLogo.png"
                    alt="logo"
                    className="mb-4"
                />
                <img
                    src="./assets/user-dashboard/avatar.png"
                    alt="avatar"
                    className="mb-4"
                />
                <a className="user-sidebar-outer hover-pointer">
                    <i className="far fa-user user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>User</span>
                </a>
                <a className="user-sidebar-outer hover-pointer">
                    <i className="fas fa-user-cog  user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
                </a>
                <a className="user-sidebar-outer hover-pointer">
                    <i className="fas fa-clipboard-list user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>Summary</span>
                </a>
                <a className="user-sidebar-outer hover-pointer">
                    <i className="fas fa-user-md user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>Setting</span>
                </a>
                <a className="user-sidebar-outer hover-pointer">
                    <i className="fas fa-receipt user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>Invoice</span>
                </a>
                <a onClick={handleLogout} className="user-sidebar-outer hover-pointer">
                    {" "}
                    <i className="fas fa-sign-out-alt  user-sidebar-icon"></i>
                    <span style={{ display: !side ? "flex" : "none" }}>Logout</span>
                </a>
            </div>
        );
    }

    const SideBar = ({ side, sideClick }) => {
        return (
            <nav
                className={
                    side
                        ? "user-sidebar user-sidebar-open"
                        : "user-sidebar user-sidebar-close"
                }
            >
                <SideBarContent side={side} sideClick={sideClick} />
            </nav>
        );
    };
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
  return (
   
            <SideBar side={sidebar} sideClick={showSidebar} />
           
   
  )
}

