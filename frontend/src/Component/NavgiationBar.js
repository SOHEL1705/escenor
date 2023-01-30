import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from "react-router-dom";

const NavgiationBar = () => {
  



return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">landing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Todolist</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Register">Register</Nav.Link>
            <Nav.Link as={Link} to="/lending">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavgiationBar
