import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import HeaderTag from "../global/HeaderTag/HeaderTag";
import GHCarousel from "../GHCarousel/GHCarousel";
import "./VendorSnapshot.scss";

function VendorSnapshot({ vendorData }) {
	
//   const { title, rating, price, cta } = vendorData;
	{}

 const images = [
    {
      img: {
        src: "/assets/signup-left.jpg",
        alt: "Vendor Image",
      },
    },
    {
      img: {
        src: "/assets/signup-left.jpg",
        alt: "Vendor Image",
      },
    },
  ];
  const carouselItems = {
    options: {
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    slides: images,
  };

  return (
    <div className="vendor--wrapper">
      <GHCarousel items={carouselItems} />
      <div className="vendor--snapshot">
        <HeaderTag tag="3" className="vendor--snapshot-title">
          {vendorData.itemName}
        </HeaderTag>
        <ReactStars
          classNames="mb-2 vendor-rating"
          count={5}
          size={10}
          edit={false}
          value={4}
          isHalf={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#2FAC66"
        />
        <p className="vendor--snapshot-price">{vendorData.cost} AED</p>
        <p className="vendor--snapshot-plan">For weekly plan</p>
        <Link 
		onClick={()=>{
			window.localStorage.setItem("itemclicked",JSON.stringify(vendorData))
		}}
		to="/create-meal-plan/vendor-details/vendor"
		state={vendorData} className="vendor--snapshot-explore">
          Explore
        </Link>
      </div>
    </div>
  );
}

// to={{
//    pathname: "/create-meal-plan/vendor-details/vendor",
//    state: vendorData // your data array of objects
//  }}
export default VendorSnapshot;
