import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "@reach/router";
import UserDashboard from "../home/UserDashboard";

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
        </Nav>
        <UserDashboard className="mr-sm-2" />
      </Navbar>
    );
  }
}

export default Header;
