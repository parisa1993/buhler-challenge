import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import { AuthContext } from "../context/Auth";
import Routes from "./Routes";

export default function Layout() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand id="logo" href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/production">Production</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <span className="material-icons">schedule</span>
                {new Date().toLocaleString()}
              </Nav.Link>
              {user ? (
                <Nav.Link href="/user">
                  <span className="material-icons">account_circle</span>
                  {user!!.username}
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="content">
        <Routes />
      </Container>
    </>
  );
}
