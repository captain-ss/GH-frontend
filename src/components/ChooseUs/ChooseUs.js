import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContentBox from '../ContentBox/ContentBox';
import HeaderTag from '../global/HeaderTag/HeaderTag';
import './ChooseUs.scss';

function ChooseUs() {
	const content = [{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	},
	{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	},
	{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	},
	{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	},
	{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	},
	{
		img: {
			src: '/assets/icons/leaf.png',
			alt: 'Leaf Icon'
		},
		content: {
			title: {
				text: 'Fresh ingredients'
			},
			description: '<p>Shed that extra fat healthy way Procuring fresh &amp; fundamental ingredients</p>'
		}
	}];

	return <div className="choose-us--wrapper">
		<div className="choose-us--img-wrapper">
			<img src="/assets/why-choose-bg.png" alt="" className="choose-us--img" />
		</div>
		<div className="choose-us--content">
			<HeaderTag tag="h2" className="gh-heading content-box--header">Why Choose Us?</HeaderTag>
			<Container>
				<Row>
					{
						content.map((item, index) => <Col key={index} md={6} lg={((index + 1) % 2 === 0) ? 5 : {span: 5, offset: 1}}><ContentBox contentData={item} /></Col>)
					}
				</Row>
			</Container>
		</div>
	</div>
}

export default ChooseUs;