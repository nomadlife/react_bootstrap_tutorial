import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsa!</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
