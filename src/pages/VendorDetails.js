import React, { useState } from 'react';
import { useParams } from 'react-router';
import {Container, Tabs, Tab} from 'react-bootstrap';
import GHBreadcrumb from '../components/GHBreadcrumb/GHBreadcrumb';
import VendorHeader from '../components/VendorHeader/VendorHeader';
import VendorMenu from '../components/VendorMenu/VendorMenu';
import VendorPhotos from '../components/VendorPhotos/VendorPhotos';
import VendorReviews from '../components/VendorReviews/VendorReviews';
import VendorOffers from '../components/VendorOffers/VendorOffers';
import '../styles/components/vendor-details.scss';
const VendorDetails = () => {
   
    const { vendor } = useParams();
    const [key, setKey] = useState('menu');

    document.dispatchEvent(new Event('viewChanged'));

    const pagePath = [{
        path: '/create-meal-plan',
        label: 'Create Meal Plan'
    },{
        // path: `/vendor-details/${vendor}`,
        label: 'Vendor'
    }];

    return <Container 
    style={{
        marginTop:"0vw",
    }}
    className="page-wrapper">
        <GHBreadcrumb pathArray={pagePath} />
        <VendorHeader />

        <Tabs id="tabs--wrapper" className="gh-tabs--wrapper" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="menu" title="Menu">
                <VendorMenu />
            </Tab>
            <Tab eventKey="photos" title="Photos">
                <VendorPhotos />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <VendorReviews />
            </Tab>
            <Tab eventKey="offers" title="Offers">
                <VendorOffers />
            </Tab>
        </Tabs>
    </Container>
};

export default VendorDetails;