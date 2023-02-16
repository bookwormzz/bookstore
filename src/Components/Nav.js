import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function NavBar() {
  const { auth } = useSelector((state) => state);

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand
          className="text-white font-weight-bold text-uppercase"
          href="/"
        >
          Bookwormz Bookstore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            {auth.id ? (
              <Nav.Link className="text-white" href="#/cart">
                Cart
              </Nav.Link>
            ) : null}
            {auth.id ? (
              <Nav.Link className="text-white" href="#/orders">
                Order History
              </Nav.Link>
            ) : null}

            {auth.id ? (
              <Nav.Link className="text-white" href="#/account">
                {" "}
                Account{" "}
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white" href="#/account-login">
                {" "}
                Login{" "}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
