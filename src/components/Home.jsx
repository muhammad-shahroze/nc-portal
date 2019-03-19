import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Col>
          <Row className='user-box'>
            <Button variant="primary">Primary</Button>
            {/* <Button className="show-all-users" variant="primary" href="/users">Show me All Users</Button> */}
          </Row>
        </Col>
      </div>
    )
  }
}

export default Home
