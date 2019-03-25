import React, { Component } from 'react'
import { fetchUsers } from '../api';

class Login extends Component {
  state = {
    username: '',
    loginbutton: false
  }


  componentDidMount() {
    fetchUsers().then(data =>
      this.setState({
        users: data.users
      })
    )
  }

  handleClick() {

  }


  render() {
    return (
      <div className="login-box">
        <h3>Please Enter your Username to Login</h3>
        <form>
          <label>
            Username:
          <input type="text" name="username" />
          </label>
          <input type="submit" value="Login" class="btn btn-outline-dark btn-lg btn-block" onClick={() => this.handleClick} />
        </form>
      </div>
    )
  }
}

export default Login
