import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTag from '../global/HeaderTag/HeaderTag';
import './VendorMenu.scss';

function VendorMenu() {
    const menuList = [{
        title: "Breakfast",
        cls: 'breakfast',
        mealTypes: [{
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan','blue berries','yougurt','banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        }]
    },
    {
        title: "Lunch",
        cls: 'lunch',
        mealTypes: [{
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        }]
    },
    {
        title: "Dinner",
        cls: 'dinner',
        mealTypes: [{
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        }]
    },
    {
        title: "Snack 1",
        cls: 'snack1',
        mealTypes: [{
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        }]
    },
    {
        title: "Snack 2",
        cls: 'snack2',
        mealTypes: [{
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        },
        {
            mealImage: {
                src: '/assets/meal-item.png',
                alt: 'meal image'
            },
            title: 'Granol bowl with blueberries',
            veg: true,
            cal: 120,
            ingredients: ['Vegan', 'blue berries', 'yougurt', 'banana']
        }]
    }];

    return <Container className="vendor-menu--wrapper px-0">
        {
            menuList.map((menu, idx) => <Fragment key={idx}>
                <HeaderTag tag="h3" className={`vendor-mealtype ico-meal ${menu.cls}`}>{menu.title}</HeaderTag>
                <Container>
                    <Row>
                        {
                            menu.mealTypes && menu.mealTypes.map((meal, index) => <Col key={index} sm={6} lg={4} xl={3}>
                                <div className="meal--wrapper">
                                    {meal.mealImage && <img src={meal.mealImage.src} className="meal--image" alt={meal.mealImage.alt} />}
                                    <HeaderTag tag="h3" className="meal--title"><img src={`/assets/icons/${meal.veg ? 'veg-ico.svg' : 'non-veg-ico.svg'}`} alt={meal.veg ? 'veg meal' : 'non-veg meal'} className="meal-icon" />{meal.title}</HeaderTag>
                                    {meal.ingredients && <p className="ingredients">{meal.ingredients.join(' | ')}</p>}
                                    {meal.cal && <span className="ico-cal">{meal.cal} cal</span>}
                                    <button className="more-cta">&#8411;</button>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Container>
            </Fragment>)
        }
        <Link to="/create-meal-plan/order-confirmation" className="btn btn--start-plan">Start your plan<span className='ico-arrow'><img src="/assets/icons/Arrow-white.svg" alt="" /></span></Link>
    </Container>
}

export default VendorMenu;