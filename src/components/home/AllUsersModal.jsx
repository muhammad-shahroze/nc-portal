import React, { Component } from "react";
import { ButtonToolbar, Modal, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

class AllUsersModal extends Component {
  state = {
    smShow: false
  };

  toggleAllUsersModal = () => {
    this.setState({
      smShow: !this.state.smShow
    });
  };

  render() {
    console.log(this.props.users);
    return (
      <ButtonToolbar>
        <Button onClick={this.toggleAllUsersModal}>All Users</Button>
        <Modal
          size="sm"
          show={this.state.smShow}
          onHide={this.toggleAllUsersModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              List of Reg. Users
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {this.props.users.map(user => {
                return <ListGroup.Item>{user.username}</ListGroup.Item>;
              })}
            </ListGroup>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default AllUsersModal;
