import React, { Component } from "react";
import { ButtonToolbar, Modal, Button, Form } from "react-bootstrap";
import { handleChange } from "../../utils/handleChange";
import { postUser, fetchUserByUsername } from "../../utils/API-Requests";

class AllUsersModal extends Component {
  state = {
    smShow: false,
    username: "",
    user: {}
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
        this.toggleLogin();
      })
      .catch(err => {
        this.setState({ user: null });
      });
  };

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
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

  render() {
    return (
      <ButtonToolbar>
        {this.getCurrentUser() ? (
          <>
            <span>Welcome {this.getCurrentUser().username}!</span>
            <Button
              className="ml-1"
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
              <Button variant="primary" type="button" onClick={this.login}>
                Sign-in
              </Button>
              <Button
                className="ml-1"
                variant="secondary"
                type="button"
                onClick={this.registerUser}
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
