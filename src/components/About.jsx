import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-4.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/mountain-3.jpg" roundedCircle className="about-profile-pic" />
                        <h3>Frank the Tank</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.</p>
                        
                        
                        
                    </Col>
                </Container>
            </div>
        )
    }
}
