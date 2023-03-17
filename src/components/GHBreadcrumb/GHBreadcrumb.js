import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import './GHBreadcrumb.scss';

function GHBreadcrumb({ pathArray }) {
    return <Breadcrumb className="breadcrumb--wrapper">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/", className: "breadcrumb-link cta-home" }}><img src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`} alt="home" /></Breadcrumb.Item>
        {
            pathArray.map((item, index) => {
                if (item.path) {
                    return <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: item.path, className: "breadcrumb-link" }}>{item.label}</Breadcrumb.Item>;
                }
                return <Breadcrumb.Item key={index} active><span className="breadcrumb-link">{item.label}</span></Breadcrumb.Item>;
            })
        }
    </Breadcrumb>
}

export default GHBreadcrumb;