import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentBox from '../ContentBox/ContentBox';
import HeaderTag from '../global/HeaderTag/HeaderTag';
import './DealoftheDay.scss';

function DealoftheDay() {
	const content = [{
		img: {
			src: '/assets/vegan1.png',
			alt: 'Pizza',
			cls: ''
		},
		content: {
			title: {
				text: 'Diet Pizza Ultimate Vegan',
				tag: 'h3'
			},
			description: '<p>Packages Starting from <span class="price">AED 199/-</span></p>'
		},
		cta: {
			href: '#',
			text: 'Subscribe',
			cls: 'cta--reverse'
		}
	},
	{
		img: {
			src: '/assets/vegan2.png',
			alt: 'Pizza',
			cls: ''
		},
		content: {
			title: {
				text: 'Diet Pizza Ultimate Vegan',
				tag: 'h3'
			},
			description: '<p>Packages Starting from <span class="price">AED 199/-</span></p>'
		},
		cta: {
			href: '#',
			text: 'Subscribe',
			cls: 'cta--reverse'
		}
	},
	{
		img: {
			src: '/assets/vegan3.png',
			alt: 'Pizza',
			cls: ''
		},
		content: {
			title: {
				text: 'Diet Pizza Ultimate Vegan',
				tag: 'h3'
			},
			description: '<p>Packages Starting from <span class="price">AED 199/-</span></p>'
		},
		cta: {
			href: '#',
			text: 'Subscribe',
			cls: 'cta--reverse'
		}
	}]
	
	return <Container className="deal-ofthe-day--wrapper">
		<HeaderTag tag="h2" className="gh-heading deal-ofthe-day--header">Deal of the Day!</HeaderTag>
		<Row>
			{
				content.map((item, index) => <Col key={index} lg={4}><ContentBox contentData={item} /></Col>)
			}
		</Row>
	</Container>
}

export default DealoftheDay;