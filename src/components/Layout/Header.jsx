import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "@reach/router";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" className="shadow">
        <Navbar.Brand href="/">NC Portal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/topics">
              Topics
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/articles">
              Articles
            </Link>
          </Nav>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
