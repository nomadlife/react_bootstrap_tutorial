import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">CodeLife</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
  <br />

  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand><Link to="/">CodeLife</Link></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav pullRight>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
  <br />

  <Navbar bg="light" expand="md" default collapseOnSelect>
      <Navbar.Brand><Link to="/">CodeLife</Link></Navbar.Brand> 
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav pullRight>
        <Nav.Link eventKey={1} componentClass={Link} to="/">Home</Nav.Link>
        <Nav.Link eventKey={2} componentClass={Link} to="/about">About</Nav.Link>
        <Nav.Link eventKey={3} componentClass={Link} to="/news">News</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>

  <br />

  <Navbar bg="light" expand="md" default collapseOnSelect>
      <Navbar.Brand><Link to="/">CodeLife</Link></Navbar.Brand> 
      <Navbar.Toggle />
      <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} to="/">Home</NavItem>
              <NavItem eventKey={2} componentClass={Link} to="/about">About</NavItem>
              <NavItem eventKey={3} componentClass={Link} to="/news">News</NavItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
            </div>
        )
    }
}
