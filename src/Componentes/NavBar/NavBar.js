import { Navbar, Nav, Container } from "react-bootstrap";
import React from 'react'

export const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="#" className="font-primary color-primary fs-32">Keyx</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#collections">Collections</Nav.Link>
                <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#products">Products</Nav.Link>
                <Nav.Link className="color-primary font-secondary fs-16 ms-lg-5 ms-md-5 ms-0" href="#About">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}
