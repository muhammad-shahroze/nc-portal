import React, { Component } from 'react';
import { Link } from '@reach/router';

export class Nomatch extends Component {
  render() {
    return (
      <div>
        <h2>I'm sorry this page doesn't exist!</h2>
        <Link to="/">Go Home!</Link>
      </div>
    );
  }
}

export default Nomatch;
