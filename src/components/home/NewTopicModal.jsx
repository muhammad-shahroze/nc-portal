import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { postTopic } from "../../utils/API-Requests";
import { navigate } from "@reach/router";
import { handleChange } from "../../utils/handleChange";

export class NewTopicModal extends Component {
  state = {
    showing: false,
    slug: "",
    description: ""
  };

  toggleNewTopicModal = () => {
    this.setState({
      showing: !this.state.showing
    });
  };

  createNewTopic = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    const newTopic = {
      slug,
      description
    };
    postTopic(newTopic).then(topic => {
      navigate(`/topics/${slug}`);
    });
    this.toggleNewTopicModal();
  };

  render() {
    return (
      <>
        <Button variant="warning" onClick={this.toggleNewTopicModal}>
          New Topic
        </Button>
        <Modal show={this.state.showing} onHide={this.toggleNewTopicModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Slug</Form.Label>
                <Form.Control
                  type="text"
                  name="slug"
                  onChange={e => this.setState(handleChange(e))}
                  placeholder="e.g. coding"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  onChange={e => this.setState(handleChange(e))}
                  placeholder="e.g. I love JavaScript!"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleNewTopicModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.createNewTopic}>
              Post Topic
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NewTopicModal;
