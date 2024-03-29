import React, { Children } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavComponent({ children }) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Github-Search</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
