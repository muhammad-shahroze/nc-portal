import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styling/main.css';

class Header extends Component {
  render() {
    return (
      <div className='title'>
        <Container className='title-container' />
        <Row>
          <Col className='title-column'>
            <Link to={'/'}><h1>NC-Portal</h1></Link>
          </Col>
          <Col>
            <Link to="/users">
              <Button className="show-all-users" variant="primary">Show me All Users</Button>
            </Link>
          </Col>
        </Row>
        <Container />
      </div>
    );
  }
}

export default Header;