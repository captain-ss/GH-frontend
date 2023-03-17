import React from 'react';
import { Container } from 'react-bootstrap';
import ContentBox from '../ContentBox/ContentBox';
import './MealPlan.scss';

function MealPlan() {
	const content = {
		img: {
			src: '/assets/bg-black.png',
			alt: 'Meal Plan',
			cls: ''
		},
		content: {
			align: 'right',
			title: {
				text: 'Gourmet Meal Plan Made Easy',
				tag: 'h3'
			},
			subtitle: {
				text: 'Not Sure Which Meal Plan To Choose?',
			}
		},
		cta: {
			href: '#',
			text: 'View Sample Menu',
			cls: 'cta--meal-plan'
		}
	};

	return <Container className="meal-plan--wrapper">
		<ContentBox contentData={content} />
	</Container>
}

export default MealPlan;