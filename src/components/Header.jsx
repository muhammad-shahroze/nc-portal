import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col } from 'react-bootstrap';
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
        </Row>
        <Container />
      </div>
    );
  }
}

export default Header;