import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class Navbar1 extends Component {

  render() {
    return (
     <Navbar expand="lg" className="bg-dark navbar-dark">  
      <Container fluid>
        <Navbar.Brand href="/">NewsApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/politics">Politics</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/crime">Crime</Nav.Link>
            <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
            <Nav.Link href="/other">Other</Nav.Link>
  
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
