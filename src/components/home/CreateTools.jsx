import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NewArticleModal from "./NewArticleModal";
import NewTopicModal from "./NewTopicModal";

export class CreateTools extends Component {
  state = {
    newArticleBody: ""
  };

  handleChange = text => {
    this.setState({
      newArticleBody: text
    });
  };

  render() {
    return (
      <Row className="mb-2" style={{ marginLeft: 200 }}>
        <Col>
          {localStorage.getItem("user") ? (
            <div className="float-right">
              <NewArticleModal />
              <NewTopicModal />
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    );
  }
}

export default CreateTools;
