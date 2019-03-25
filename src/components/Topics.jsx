import React, { Component } from "react";
import { fetchTopics } from "../utils/API-Requests";
import NewTopic from "./NewTopic";

export class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    fetchTopics().then(data => {
      this.setState({
        topics: data.topics
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <ul>
          {this.state.topics.map(topics => {
            return (
              <li className="topic-border" key={topics.slug}>
                Name: {topics.slug}
                <br />
                Description: {topics.description}
              </li>
            );
          })}
        </ul>
        <NewTopic />
      </div>
    );
  }
}

export default Topics;
