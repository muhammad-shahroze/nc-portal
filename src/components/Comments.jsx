import React, { Component } from "react";
import { fetchCommentsByArticleId } from "../utils/API-Requests";
import { Link } from "@reach/router";
import CommentVoter from "./CommentVoter";

export class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    fetchCommentsByArticleId(this.props.article_id).then(({ comments }) => {
      this.setState({ comments: comments });
    });
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <ol>
          {this.state.comments.map(comment => {
            return (
              <li className="comment-border" key={comment.comment_id}>
                <Link to={`/comments/${comment.comment_id}`}>
                  Author: {comment.title}
                </Link>
                Body: {comment.body}
                <br />
                Votes: {comment.votes}
                <br />
                <CommentVoter
                  comment_id={this.props.article_id}
                  votes={comment.votes}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Comments;
