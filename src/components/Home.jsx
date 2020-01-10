import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2> Welcome to CodeLife.io</h2>
                    <p>This is how to build a website with React</p>
                <Link to='/about'>
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/mountain-1.jpg" roundedCircle className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/mountain-2.jpg" roundedCircle className="profile-pic"/>
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/mountain-3.jpg" thumbnail className="profile-pic"/>
                        <h3>Riff</h3>
                        <p>That's a crooked tree</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
