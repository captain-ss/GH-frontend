import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import GHCarousel from "../GHCarousel/GHCarousel";
import OfferSnapshot from "../OfferSnapshot/OfferSnapshot";
import "./TopSlider.scss";

function TopSlider() {
  const carouselItems = {
    options: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    slides: [
      {
        img: {
          src: "/assets/sliders/slide1.jpg",
          alt: "First slide",
          cls: "",
        },
        text: {
          title: "Gourmet Meal Plan Made Easy",
          desc: "Perfect combination of healthy and delicious food",
        },
        cta: {
          href: "#",
          text: "Get Started",
          cls: "cta--black",
        },
      },
      {
        img: {
          src: "/assets/sliders/slide1.png",
          alt: "First slide",
          cls: "",
        },
        text: {
          title: "Gourmet Meal Plan Made Easy ",
          desc: "Perfect combination of healthy and delicious food",
        },
        cta: {
          href: "#",
          text: "Get Started",
          cls: "cta--black",
        },
      },
      {
        img: {
          src: "/assets/sliders/slide2.webp",
          alt: "First slide",
          cls: "",
        },
        text: {
          title: "Gourmet Meal Plan",
          desc: "Perfect combination of healthy and delicious food",
        },
        cta: {
          href: "#",
          text: "Juices",
          cls: "cta--black",
        },
      },
    ],
  };

  return (
    <Container className="top-slider-container" fluid>
      <GHCarousel items={carouselItems} />
      <OfferSnapshot />
      <Link
        to="/create-meal-plan"
        className="d-none d-md-block cta--creat-plan"
      >
        <img src="/assets/icons/food-delivery-white.png" alt="" />
        <p className="offer-content--text">Create your plan</p>
      </Link>
    </Container>
  );
}

export default TopSlider;
