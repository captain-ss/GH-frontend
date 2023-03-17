import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentBox from '../ContentBox/ContentBox';
import './KnowMore.scss';

function KnowMore() {
	const content = {
		content: {
			title: {
				text: 'What is Gourmet Hub ?',
				tag: 'h3'
			},
			description: '<p>Finding the right choices of meal for your fitness goals can be cumbersome in today\'s fast paced world especially for working professionals or people who are staying away from home, Gourmet Hub helps you find the right diet and deliver them to your doorstep with our unique, affordable weekly & monthly subscription plans to fit your nutritional needs.</p>'
		},
		cta: {
			href: '#',
			text: 'Know more',
		}
	};

	return <div className="know-more--wrapper">
		<div className="known-more--img-wrapper">
			<img src="/assets/about-banner.png" alt="" className="known-more--img" />
		</div>
		<div className="known-more--content">
			<Container>
				<Row>
					<Col md={5}><img src="/assets/G-white.png" alt="Gourmet Hub" className="known-more--content-img" /></Col>
					<Col md={6}><ContentBox contentData={content} /></Col>
				</Row>
			</Container>
		</div>
	</div>
}

export default KnowMore;