import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-4.jpg" />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/mountain-3.jpg" className="about-profile-pic" rounded/></Col>
                </Container>
            </div>
        )
    }
}
