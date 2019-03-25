import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class NewTopicModal extends Component {
  state = {
    showing: false
  };

  toggleNewTopicModal = () => {
    this.setState({
      showing: !this.state.showing
    });
  };

  render() {
    return (
      <>
        <Button variant="warning" onClick={this.toggleNewTopicModal}>
          New Topic
        </Button>
        <Modal show={this.state.showing}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleNewTopicModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.toggleNewTopicModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NewTopicModal;
