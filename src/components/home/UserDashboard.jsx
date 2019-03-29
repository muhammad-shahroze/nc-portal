import React, { Component } from "react";
import { ButtonToolbar, Modal, Button, Form } from "react-bootstrap";
import { handleChange } from "../../utils/handleChange";
import {
  fetchUsers,
  postUser,
  fetchUserByUsername
} from "../../utils/API-Requests";

class AllUsersModal extends Component {
  state = {
    smShow: false,
    username: "",
    user: {},
    allusers: []
  };

  toggleLogin = () => {
    this.setState({
      smShow: !this.state.smShow
    });
  };

  login = () => {
    fetchUserByUsername(this.state.username)
      .then(user => {
        this.setState({ user });
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      })
      .catch(err => {
        this.setState({ user: null });
      });
  };

  getCurrentUser = () => {
    const userItem = localStorage.getItem("user");
    if (userItem !== undefined) {
      return JSON.parse(userItem);
    }
  };

  signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  registerUser = () => {
    const { username } = this.state;
    postUser({
      username,
      avatar_url: "",
      name: ""
    }).then(user => {
      this.login();
    });
  };

  fetchAllUsers = () => {
    fetchUsers().then(user => {
      this.setState({
        allusers: user
      });
    });
  };

  render() {
    return (
      <ButtonToolbar>
        {this.getCurrentUser() ? (
          <>
            <span className="text-success">
              Welcome {this.getCurrentUser().username}!
            </span>
            <Button
              className="ml-1 sign-out"
              variant="secondary"
              type="submit"
              size="sm"
              onClick={this.signOut}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Button onClick={this.toggleLogin}>Login</Button>
        )}
        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={this.toggleLogin}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className={this.state.user ? "" : "border border-danger"}
                  type="text"
                  name="username"
                  onChange={e => this.setState(handleChange(e))}
                  placeholder="e.g. tickle122"
                />
                <Form.Text className="text-muted" />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={this.login}
                disabled={this.state.username === ""}
              >
                Sign-in
              </Button>
              <Button
                className="ml-1"
                variant="secondary"
                type="button"
                onClick={this.registerUser}
                disabled={this.state.username === ""}
              >
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default AllUsersModal;
