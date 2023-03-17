//system files
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
//system files
import Select from "react-select"
import { Link } from 'react-router-dom';
import "../App.scss";
import Dropzone from "react-dropzone"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Label, Input, Container, Row, Col,Nav, Table, Button } from 'react-bootstrap';

// import {Container, Nav, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import SideBar from "../components/SideBar";


const TicketDetails = ({ setMeal }) => {

  function handleLogout() {
    window.sessionStorage.removeItem("userName", false);
    window.location.href = "/";
  }
  const [locationOption, setLocation] = useState(null);
  const [monthOption, setMonth] = useState(null);

  const [selectedFiles, setselectedFiles] = useState([])

	const chatData = [
		{
			userImage: "#1876GG",
			userName: "Albert",
			content:
				"Campaign owners also have the ability to generate CSV files of all their contributors, as well as CSV files for their filtered selections of contributions. You can export your CSV files as an Excel File, Google Doc, or other application to manage your supporters.",
			time: "16 hours ago",
		},
		{
			userImage: "#1876GG",
			userName: "You",
			content: "Can I generate CSV files for contributors?",
			time: "13 hours ago",
		},
		{
			userImage: "#1876GG",
			userName: "Albert",
			content:
				"Campaign owners also have the ability to generate CSV files of all their contributors, as well as CSV files for their filtered selections of contributions. You can export your CSV files as an Excel File, Google Doc, or other application to manage your supporters.",
			time: "2 days ago",
		},
	]

	function handleAcceptedFiles(files) {
		files.map(file =>
			Object.assign(file, {
				preview: URL.createObjectURL(file),
				formattedSize: formatBytes(file.size),
			})
		)
		setselectedFiles(files)
	}
	function formatBytes(bytes, decimals = 2) {
		if (bytes === 0) return "0 Bytes"
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
	}



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
                <span>Search</span>
              </a>
              <a className="user-a hover-pointer">
                <img className="me-1" style={{ width: "11%" }} src="./assets/icons/bell.svg" alt="bell" />
                <span>Notifications</span>
              </a>
              <a onClick={handleLogout} className="user-a hover-pointer">
                <img className="me-1" style={{ width: "11%" }} src="./assets/icons/user.svg" alt="user" />
                <span>Signout</span>
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

   
  

  

      function HomePage({side,sideFirst,setSide}) {
        return (
          <div className="w-100">
            <Header side={side} sideFirst={sideFirst} setSide={setSide}/>
            <Container className="page-content order-request--wrapper">
            <div className="page-title-box ticket-detail-title">
				<Row className="mb-3">
					<Col md={6}>
					<Link to="/user-dashboard-ticketing">
						<h2 className="page-title">
							
            <i class="fa fa-chevron-left" aria-hidden="true"></i>

								<span className="m-3 text-orange">Ticket - 1299</span>
						
						</h2>
						</Link>
					</Col>
				</Row>
			</div>
			<div className="table-responsive help-support-detail-table mb-5">
				<Table className="mb-0 table-borderless">
					<thead className="table-light">
						<tr>
							<th scope="col">Ticket ID</th>
							<th scope="col">Subject</th>
							<th scope="col">Status</th>
							<th scope="col">
								{" "}
                <img src="/assets/user-dashboard/icon-location-orange.svg"></img>
								<span className="px-1">Location</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span className="text-orange">#1876GG </span>
							</td>
							<td>
								<span className="text-orange">
									Problem starting campaign last week.....
								</span>
							</td>
							<td>
								<select className="borderless-select">
									<option>In-progress</option>
									<option>New</option>
									<option>Closed</option>
								</select>
							</td>
							<td>Lorem Ipsum</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div className="user-chat-section container-fluid">
				{chatData.map((data, index) => {
					return (
						<Col md={12} className="pb-2 pt-2 mb-3 border-bottom-light">
							<Row>
								<Col md={2}>
									<div className="user-image">
										<img
											src="/assets/meal-item.png"
											className="avatar-sm rounded-circle float-start me-3"
											alt=""
										/>
									</div>
								</Col>
								<Col md={10}>
									<div className="user-details position-relative">
										<h5>{data.userName}</h5>
										<p className="user-content">{data.content}</p>
										<span className="user-time">{data.time}</span>
									</div>
								</Col>
							</Row>
						</Col>
					)
				})}
				<div className="reply-box">
					<Col md={12} className="pb-2 pt-2 mb-3 border-bottom-light">
						<Row>
							<Col md={2}>
								<div className="user-image">
									<img
										src="/assets/meal-item.png"
										className="avatar-sm rounded-circle float-start me-3"
										alt=""
									/>
								</div>
							</Col>
							<Col md={10}>
								<div className="chat-box">
									<input
										type="text"
										className="chat-input"
										placeholder="Reply"
									/>
									<div className="file-upload-row">
										<Row>
											<Col md={6}></Col>
											<Col md={6}>
												<div className="file-upload-box">
													<span>jpg, gif, jpeg.png, .bt .pdf</span>
													<Dropzone
														onDrop={acceptedFiles => {
															handleAcceptedFiles(acceptedFiles)
														}}
													>
														{({ getRootProps, getInputProps }) => (
															<div className="attachment">
																<div
																	className="dz-message needsclick m-0"
																	{...getRootProps()}
																>
																	<input {...getInputProps()} />
																	<div>
																		{/* <img src={atc} className="img-fluid"></img> */}
																	</div>

																</div>
															</div>
														)}
													</Dropzone>

													<div className="reply-btn">
														<Button
															type="submit"
															color="success"
															className="btn-block reply-button"
														>
															Reply
														</Button>
													</div>
												</div>

											</Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</div>
			</div>






		
	</Container>
          </div>
        );
      }
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

      return (
        <div className='w-100 d-flex flex-row'>
            <SideBar side={sidebar} sideClick={showSidebar}/>
            <HomePage side={showSidebar} sideFirst={sidebar} setSide={setSidebar}/>
        </div>
    )
};

export default TicketDetails;