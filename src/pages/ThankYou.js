import React from 'react';
import { Button, Container } from 'react-bootstrap';
import GHBreadcrumb from '../components/GHBreadcrumb/GHBreadcrumb';
import HeaderTag from '../components/global/HeaderTag/HeaderTag';
import '../styles/components/thank-you.scss';
import { Link } from 'react-router-dom'
function ThankYou() {
	document.dispatchEvent(new Event('viewChanged'));
	
	const pagePath = [{
		path: '/create-meal-plan',
		label: 'Create Meal Plan'
	}, {
		// path: `/vendor-details/${vendor}`,
		label: 'Thank You'
	}];

	return <Container className="page-wrapper thank-you--wrapper">
		<GHBreadcrumb pathArray={pagePath} />
		<div className="thank-you--message">
			<img src="/assets/success.png" alt="success" />
			<HeaderTag tag="h1" className="thank-you--title">Thank you for your order!</HeaderTag>
			<p>Your order has been successfully placed; you will receive a confirmation on your email shortly.</p>
			<Button className="cta cta--gh-green"
			
			><Link
			style={{
				color:"white",
				fontWeight:"500",
				textDecoration:"none"
			}}
			to="/user-dashboard">View Dashboard</Link></Button>
		</div>
	</Container>;
}

export default ThankYou;