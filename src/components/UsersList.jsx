import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import { fetchUsers } from '../utils/API-Requests'

class UsersList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    fetchUsers().then((users) => {
      this.setState({ users })
    })
  }

  render() {
    const { users } = this.state
    return (
      <div className='users-list'>
        <div className="userListHeader">
          <h3>The following are a list of registered users with full accecibility to the site features</h3>
        </div>
        <ListGroup className='user-group'>
          {users.map(user => {
            return <ListGroup.Item className='user-item'>
              {user.username}
            </ListGroup.Item>
          })}
        </ListGroup>
      </div>
    )
  }
}

export default UsersList
