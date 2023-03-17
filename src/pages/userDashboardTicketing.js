//system files
import React, { useState } from 'react';
//system files
import Select from "react-select"
import { Link } from 'react-router-dom';
import { Label, Container, Row, Col, Nav, Table, Button } from 'react-bootstrap';
// import {Container, Nav, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-step-progress-bar/styles.css";

import SideBar from "../components/SideBar";


const UserDashboardTicketing = ({ setMeal }) => {

	function handleLogout() {
		window.sessionStorage.removeItem("userName", false);
		window.location.href = "/";
	}
	const [locationOption, setLocation] = useState(null);
	const [monthOption, setMonth] = useState(null);


	const kitchenLocation = [
		{
			options: [
				{ label: "Mustard", value: "Mustard" },
				{ label: "Ketchup", value: "Ketchup" },
				{ label: "Relish", value: "Relish" }
			]
		},
	];
	const TableData = [
		{ tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "New", lastUpdate: "Jan 10, 2016" },
		{ tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "In Progress", lastUpdate: "Jan 10, 2016" },
		{ tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
		{ tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
		{ tickeId: "#1876GG", subject: "Problem starting campaign last week.....", status: "Closed", lastUpdate: "Jan 10, 2016" },
	];

	const selectMonth = [
		{
			options: [
				{ label: "Month", value: "Month" },
				{ label: "Ketchup", value: "Ketchup" },
				{ label: "Relish", value: "Relish" }
			]
		},
	];

	function handleSelectGroup(selectedGroup, group) {
		if (group === 'location') {
			setLocation(selectedGroup);
		}
		if (group === 'month') {
			setMonth(selectedGroup);
		}
	}
	function Header({ side }) {
		return (
			<div className="d-flex flex-column">
				<div className="container-fluid user-header align-items-center justify-content-between w-100
          pl-5 pr-3 pb-3  pt-3 d-flex">
					<i className="fas fa-bars hamburger" onClick={side}></i>
					<div className="d-flex flex-row justify-content-between align-items-center user-header-innner">
						<a className="user-a hover-pointer">
							<img className="me-1" style={{ width: "11%" }} src="./assets/icons/search.svg" alt="search" />
							<span style={{
								textDecoration:"none"

							}}>Search</span>
						</a>
						<a className="user-a hover-pointer">
							<img className="me-1" style={{ width: "11%" }} src="./assets/icons/bell.svg" alt="bell" />
							<span
							style={{
								textDecoration:"none"

							}}
							>Notifications</span>
						</a>
						<a onClick={handleLogout} className="user-a hover-pointer">
							<img className="me-1" style={{ width: "11%" }} src="./assets/icons/user.svg" alt="user" />
							<span >Signout</span>
						</a>
					</div>
				</div>
				<div className="position-relative">
					<div className="position-absolute top-50 start-0 translate-middle-y px-4 py-2" style={{ background: "linear-gradient(90deg, #FFFFFF 0%, rgba(196, 196, 196, 0) 150%)" }}>
						<h1 className="fw-bold fs-2 mb-1 lh-1">Healthy Living</h1>
						<span className="secondary fw-500">Get 30% off on promo code</span>
					</div>
					<img src="./assets/user-dashboard/banner.png" alt="" className="rounded-5 align-self-center mt-2 mb-4 img-fluid" style={{ width: "95%" }} />
				</div>
			</div>
		);
	}

	

	function HomePage({ side, sideFirst, setSide }) {
		return (
			<div className="w-100">
				<Header side={side} sideFirst={sideFirst} setSide={setSide} />
				<Container className="page-content order-request--wrapper">
					<div className='page-headline mb-3'>
						<span className='orange-text'>Ticketing</span>
					</div>
					<Row className='mb-4'>
						<Col sm={6} lg={3}>
							<div className='tickets-summary-box'>
								<div className='ticket-number-and-heading'>
									<h5 className='mb-0'>045</h5>
									<span>All Tickets</span>
								</div>
								<div className='summary-symbol'>
									<div className='orange-image'> <img src="/assets/user-dashboard/all-tickets.svg"></img></div>
								</div>
							</div>
						</Col>
						<Col sm={6} lg={3}>
							<div className='tickets-summary-box green-box'>
								<div className='ticket-number-and-heading'>
									<h5 className='mb-0'>005</h5>
									<span>In-Progress Tickets</span>
								</div>
								<div className='summary-symbol'>
									<div className='green-image'> <img src="/assets/user-dashboard/in-progress.svg"></img></div>
								</div>
							</div>
						</Col>
						<Col sm={6} lg={3}>
							<div className='tickets-summary-box gray-box'>
								<div className='ticket-number-and-heading'>
									<h5 className='mb-0'>040</h5>
									<span>Closed Tickets</span>
								</div>
								<div className='summary-symbol'>
									<div className='gray-image'> <img src="/assets/user-dashboard/closed.svg"></img></div>
								</div>
							</div>
						</Col>

					</Row>

					<div className="table-responsive">
						<table className="table">
							<thead className="table-light">
								<tr>
									<th scope="col">Ticket ID</th>
									<th scope="col">Subject</th>
									<th scope="col">Status</th>
									<th scope="col">Last Update	</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>

								{TableData.map((data, index) => {
									return (
										<tr>
											<td>{data.tickeId}</td>
											<td>{data.subject}</td>
											{data.status == "Closed" ? (
												<td><span className='closed_tag'>{data.status}</span></td>
											) : <td>

												<select className='status-select'>
													<option>{data.status}</option>
													{data.status == "New" ? (
														<option>In Progress</option>
													) : <option>New</option>}

												</select>
											</td>
											}

											<td>{data.lastUpdate}</td>
											<td>
												<Link to="/ticket-details">

													<i className="fas fa-chevron-circle-right"></i>

												</Link>


											</td>
										</tr>
									)

								})}


							</tbody>
						</table>
					</div>
				</Container>
			</div>
		);
	}
	const [sidebar, setSidebar] = useState(true);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div className='w-100 d-flex flex-row'>
			<SideBar side={sidebar} sideClick={showSidebar} />
			<HomePage side={showSidebar} sideFirst={sidebar} setSide={setSidebar} />
		</div>
	)
};

export default UserDashboardTicketing;