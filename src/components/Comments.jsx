import React, { Component } from "react";
import { fetchCommentsByArticleId } from "../utils/API-Requests";
import { Link } from "@reach/router";
import CommentVoter from "./CommentVoter";
import { Card, Badge } from "react-bootstrap";
let moment = require("moment");

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
        <h3>Comments</h3>
        {this.state.comments.map(comment => {
          return (
            <Card
              className="articles-list-card d-flex flex-row mb-2 rounded-0"
              bg="dark"
              text="white"
              key={comment.article_id}
            >
              <div className="h-100 voting-container d-flex flex-column text-center">
                <i className="fa fa-arrow-up text-success" aria-hidden="true" />
                <span>{comment.votes}</span>
                <i
                  className="fa fa-arrow-down text-danger"
                  aria-hidden="true"
                />
              </div>
              <div className="content w-100">
                <Card.Body>
                  <h5 className="float-left font-weight-bold">
                    <Link to={`/comments/${comment.comment_id}`}>
                      By: {comment.author}
                    </Link>
                  </h5>
                  <Badge className="float-right" variant="warning">
                    {" "}
                    {comment.author}
                  </Badge>
                  <div className="clearfix" />
                  <h6 className="font-weight-light">
                    Posted by: {comment.author}
                  </h6>
                  <Card.Text className="block-with-text">
                    {comment.body}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-info float-right">
                    date posted -{" "}
                    {moment(comment.created_at).format("YYYY MM DD")}
                  </small>
                </Card.Footer>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Comments;

{
  /* <CommentVoter
                  comment_id={this.props.article_id}
                  votes={comment.votes}
                /> */
}
