import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentBox from '../ContentBox/ContentBox';
import HeaderTag from '../global/HeaderTag/HeaderTag';
import './ChooseYourGoal.scss';

function ChooseYourGoal() {
	const content = [{
		img: {
			src: '/assets/Loose-Weight.jpg',
			alt: 'Weight Loss',
			cls: ''
		},
		content: {
			title: {
				text: 'Loose Weight',
				tag: 'h3'
			}
		},
		cta: {
			href: '#',
			text: 'Select',
			cls: ''
		}
	},
	{
		img: {
			src: '/assets/getlean.png',
			alt: 'Weight Loss',
			cls: ''
		},
		content: {
			title: {
				text: 'Get Lean',
				tag: 'h3'
			}
		},
		cta: {
			href: '#',
			text: 'Select',
			cls: ''
		}
	},
	{
		img: {
			src: '/assets/bulkup.png',
			alt: 'Weight Loss',
			cls: ''
		},
		content: {
			title: {
				text: 'Bulk Up',
				tag: 'h3'
			}
		},
		cta: {
			href: '#',
			text: 'Select',
			cls: ''
		}
	},
	{
		img: {
			src: '/assets/Shred.jpg',
			alt: 'Weight Loss',
			cls: ''
		},
		content: {
			title: {
				text: 'Shred',
				tag: 'h3'
			}
		},
		cta: {
			href: '#',
			text: 'Select',
			cls: ''
		}
	}]

	return (<Container className="choose-your-goal--wrapper">
		<HeaderTag tag="h2" className="gh-heading choose-goal--header">Choose Your Goal</HeaderTag>
		<Row>
			{
				content.map((item, index) => <Col key={index} md={6} xl={3}><ContentBox contentData={item} /></Col>)
			}
		</Row>
		
	</Container>
	)
}

export default ChooseYourGoal;