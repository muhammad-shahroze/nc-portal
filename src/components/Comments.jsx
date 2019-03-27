import React, { Component } from "react";
import { fetchCommentsByArticleId } from "../utils/API-Requests";
import { Link } from "@reach/router";
import { Card, Badge, Button } from "react-bootstrap";
import { Collapse, CardBody } from "reactstrap";
import { handleChange } from "../utils/handleChange";
import { postCommentByArticleId, patchComment } from "../utils/API-Requests";

let moment = require("moment");

export class Comments extends Component {
  state = {
    comments: [],
    newCommentBody: "",
    addCommentCollapse: false,
    voteChange: 0,
    hasError: false
  };

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    fetchCommentsByArticleId(this.props.article_id).then(({ comments }) => {
      this.setState({ comments: comments });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      author: JSON.parse(localStorage.getItem("user")).username,
      body: this.state.newCommentBody
    };
    postCommentByArticleId(this.props.article_id, newComment).then(comment => {
      this.setState({ newCommentBody: "" });
      this.getComments();
      this.toggle();
    });
  };

  toggle = () => {
    this.setState(state => ({
      addCommentCollapse: !this.state.addCommentCollapse
    }));
  };

  handleVoteClick = (index, voteChange) => {
    const comment = this.state.comments[index];
    comment.votes += voteChange;
    const allComments = this.state.comments;
    allComments[index] = comment;
    this.setState({ comments: allComments });
    patchComment(comment.comment_id, voteChange).catch(err => {
      this.setState({
        hasError: true
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Post Comment
          </Button>
          <Collapse isOpen={this.state.addCommentCollapse}>
            <Card>
              <CardBody>
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1" />
                    <textarea
                      name="newCommentBody"
                      value={this.state.newCommentBody}
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      type="text"
                      onChange={e => this.setState(handleChange(e))}
                    />
                  </div>
                </form>
                <Button
                  className="float-right btn btn-primary btn-sm"
                  variant="primary"
                  onClick={this.handleSubmit}
                >
                  Add new Comment
                </Button>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        {this.state.comments.map((comment, index) => {
          return (
            <Card
              className="articles-list-card d-flex flex-row mb-2 rounded-0"
              bg="dark"
              text="white"
              key={comment.article_id}
            >
              <div className="h-100 voting-container d-flex flex-column text-center">
                <Button
                  className="vote"
                  color="secondary"
                  size="sm"
                  onClick={() => this.handleVoteClick(index, 1)}
                >
                  <i
                    className="fa fa-arrow-up text-success"
                    aria-hidden="true"
                  />
                </Button>
                <p className="vote-count"> {comment.votes} </p>
                <Button
                  className="vote"
                  color="secondary"
                  size="sm"
                  onClick={() => this.handleVoteClick(index, -1)}
                >
                  <i
                    className="fa fa-arrow-down text-danger"
                    aria-hidden="true"
                  />
                </Button>
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
