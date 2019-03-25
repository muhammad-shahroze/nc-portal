import React, { Component } from "react";
import { postCommentByArticleId } from "../utils/API-Requests";
import { navigate } from "@reach/router";

export class NewComment extends Component {
  state = {
    newCommentBody: ""
  };

  handleChange = text => {
    this.setState({
      newCommentBody: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      Author: "happyamy2016",
      body: this.state.newCommentBody,
      Votes: "10"
    };

    postCommentByArticleId(newComment).then(comment => {
      navigate(`/articles/${comment.article_id}/comments`);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-article-button">
        <textarea onChange={event => this.handleChange(event.target.value)}>
          Body
        </textarea>
        <button class="btn btn-outline-primary" type="submit">
          Add Comment
        </button>
      </form>
    );
  }
}

export default NewComment;
