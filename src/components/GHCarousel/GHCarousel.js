import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import HeaderTag from '../global/HeaderTag/HeaderTag';
import './GHCarousel.scss';

function GHCarousel({ items }) {
	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return <Button className={className} style={{ ...style ,background:'none',border:"none"}} onClick={onClick}><img src="/assets/icons/arrow-right.svg" alt="Next Arrow" /></Button>
	}

	const PrevArrow = (props) => {
		const { className, style, onClick } = props;
		return <Button className={className} style={{ ...style,background:'none',border:"none"
	
	}} onClick={onClick}><img src="/assets/icons/arrow-left.svg" alt="Previous Arrow" /></Button>
	}

	const SliderOptions = useMemo(() => ({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		...items.options
	}), [items])

	return (<div className="gh-carousel--wrapper">
		{items.title && <HeaderTag tag={items.title.tag} className={`gh-heading ${items.title.cls}`}>{items.title.text}</HeaderTag>}
		<Slider {...SliderOptions}>
			{
				items.slides.map((item, index) => <div key={index} className="slider-item">
					<img src={item.img.src} alt={item.img.alt} className={`slider-img ${item.img.cls}`} />
					{(item.text || item.cta) && <div className="slider-text">
						{item.text?.title && <h3 className='GHC-title-carausal'>{item.text.title}</h3>}
						{item.text?.desc && <p
						style={{
							fontWeight:"700"
						}}
						>{item.text.desc}</p>}
						{item.cta && <a 
						style={{
							textDecoration:"none",
							fontWeight:"700"

						}}
						href={item.cta.href} className={`cta ${item.cta.cls ? item.cta.cls : ''}`}>
							{item.cta.icon && <img src={item.cta.icon} alt="Offer icon" />}
							{item.cta.text}
							{item.cta.arrow && <img src={item.cta.arrow} alt="Arrow icon" />}
						</a>}
					</div>}
				</div>)
			}
		</Slider>
	</div>)
}

export default GHCarousel;