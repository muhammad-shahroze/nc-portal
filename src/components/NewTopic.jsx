import React, { Component } from "react";
import { postTopic } from "../utils/API-Requests";
import { navigate } from "@reach/router";

export class NewTopic extends Component {
  state = {
    newTopicBody: ""
  };

  handleChange = text => {
    this.setState({
      newTopicBody: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTopic = {
      slug: `My new Topic`,
      description: this.state.newTopicBody
    };
    postTopic(newTopic).then(topic => {
      navigate(`/topics/${topic.slug}`);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={event => this.handleChange(event.target.value)} />
        <button type="submit">Add Topic</button>
      </form>
    );
  }
}

export default NewTopic;
