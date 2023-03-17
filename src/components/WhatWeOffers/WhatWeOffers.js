import React from 'react';
import { Container } from 'react-bootstrap';
import GHCarousel from '../GHCarousel/GHCarousel';
import './WhatWeOffers.scss';

function WhatWeOffers() {
	// fetch('http://15.206.200.60:3005/gourmethub/items-categories')
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));
	const carouselItems = {
		title: {
			tag: 'h2',
			cls: '',
			text: 'What We Offer'
		},
		options: {
			arrows: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						centerMode: true,
						centerPadding: "70px",
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						centerMode: true,
						centerPadding: "70px",
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		},
		slides: [{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Juices.png',
				text: 'Juices',
				arrow: '/assets/icons/arrow-right.svg'
			}
		},
		{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Non-Veg.png',
				text: 'Non Veg',
				arrow: '/assets/icons/arrow-right.svg'
			}
		},
		{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Detox.png',
				text: 'Detox',
				arrow: '/assets/icons/arrow-right.svg'
			}
		},
		{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Veg.png',
				text: 'Veg',
				arrow: '/assets/icons/arrow-right.svg'
			}
		},
		{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Bone-Broth.png',
				text: 'Bone Broth',
				arrow: '/assets/icons/arrow-right.svg'
			}
		},
		{
			img: {
				src: '/assets/Juices.jpg',
				alt: 'First slide',
				cls: ''
			},
			cta: {
				href: '#',
				icon: '/assets/icons/Detox.png',
				text: 'Detox',
				arrow: '/assets/icons/arrow-right.svg'
			}
		}]
	};


	return <Container className="what-we-offer--wrapper">
		<GHCarousel items={carouselItems} />
	</Container>
}

export default WhatWeOffers