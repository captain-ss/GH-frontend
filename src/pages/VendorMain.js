import React,{useState} from 'react';

import SideBar from "./components/SideBar";
import VendorDashboard from "VendorDashboard";

// import {Container, Nav, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function VendorMain(){
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='w-100 d-flex flex-row'>
            <SideBar side={sidebar} sideClick={showSidebar}/> 
            <VendorDashboard side={showSidebar} sideFirst={sidebar} setSide={setSidebar}/>
        </div>
    )
}

export default VendorMain;