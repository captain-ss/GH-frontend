import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './OfferSnapshot.scss';

function OfferSnapshot() {
	const [closeModal, setCloseModal] = useState(false);

	const handleClose = () => {
		setCloseModal(!closeModal);
	}

	return !closeModal && <Container bsPrefix="d-none d-md-flex meal-offer--wrapper">
		<button className="btn-close--offer" onClick={handleClose}>X</button>
		<img src="/assets/icons/food-delivery-green.png" alt="" className="offer-image" />
		<div className="offer-content">
			<p className="offer-content--title">Meal Plan Offer!</p>
			<p className="offer-content--text">Flat 50% Off on any food</p>
			<Link to="/create-meal-plan" className="offer-content--cta">Get it now</Link>
		</div>
	</Container>
}

export default OfferSnapshot