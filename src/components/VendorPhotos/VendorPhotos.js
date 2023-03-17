import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './VendorPhotos.scss';

function VendorPhotos() {
    const gallery = [
        [{
            src: '/assets/vendor-images/vendor-1.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-2.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-3.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-4.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-5.png',
            alt: ''
        }],
        [{
            src: '/assets/vendor-images/vendor-10.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-7.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-8.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-9.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-6.png',
            alt: ''
            }],
        [{
            src: '/assets/vendor-images/vendor-1.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-2.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-3.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-4.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-5.png',
            alt: ''
        }],
        [{
            src: '/assets/vendor-images/vendor-10.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-7.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-8.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-9.png',
            alt: ''
        },
        {
            src: '/assets/vendor-images/vendor-6.png',
            alt: ''
        }]
    ];

    return <Container className="gallery--wrapper">
        {
            gallery.map((row, idx) => <Row key={idx}>
                <Col md={6}>
                    <img src={row[0].src} alt={row[0].alt} className="gallery-image bigger" />
                </Col>
                <Col md={6}>
                    <Row>
                        {
                            row.map((image, i) => i !== 0 && <Col key={i} md={6}>
                                <img src={image.src} alt={image.alt} className="gallery-image" />
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row>)
        }
        <Button className="cta cta--border-bottom">Show more (20)</Button>
    </Container>;
}

export default VendorPhotos;