import React, { Component } from "react";
import {
  getArticleById,
  deleteArticle,
  patchArticle
} from "../utils/API-Requests";
import { navigate } from "@reach/router";
import Comments from "./Comments";
import { Card } from "react-bootstrap";
import { Button } from "reactstrap";
import "../styling/article.css";
import {getUserLoginStatus} from "../utils/getUserLoginStatus"
let moment = require("moment");

class Article extends Component {
  state = {
    article: {},
    voteChange: 0,
    hasError: false
  };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  handleDelete = () => {
    deleteArticle(this.props.article_id).then(() => navigate(`/articles`));
  };

  handleVoteClick = voteChange => {
    const { article_id } = this.props;
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }));
    patchArticle(article_id, voteChange).catch(err => {
      this.setState({
        hasError: true
      });
    });
  };

  render() {
    console.log(this.props);
    const { article, voteChange } = this.state;
    return (
      <div>
        <Card
          className="articles-list-card d-flex flex-row mb-2 rounded-0"
          bg="dark"
          text="white"
          key={article.article_id}
        >
          <div className="h-100 voting-container d-flex flex-column text-center">
            <Button
              className="vote"
              color="secondary"
              size="sm"
              onClick={() => this.handleVoteClick(1)}
            >
              <i className="fa fa-arrow-up text-success" aria-hidden="true" />
            </Button>
            <p className="vote-count"> {typeof article.votes === 'number' ? article.votes + voteChange : null} </p>
            <Button
              className="vote"
              color="secondary"
              size="sm"
              onClick={() => this.handleVoteClick(-1)}
            >
              <i className="fa fa-arrow-down text-danger" aria-hidden="true" />
            </Button>
          </div>
          <div className="content w-100">
            <Card.Body>
              <h5 className="card-title">{article.title}</h5>
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-info">Posted by: {article.author}</small>
              <small className="text-info float-right">
                date posted - {moment(article.created_at).format("YYYY MM DD")}
              </small>
              {getUserLoginStatus() && JSON.parse(localStorage.getItem("user")).username ===
              this.state.article.author ? (
                <Button
                  color="danger"
                  size="sm"
                  className="float-right mr-2 delete"
                  onClick={this.handleDelete}
                >
                  Delete Post
                </Button>
              ) : (
                ""
              )}
            </Card.Footer>
          </div>
        </Card>
        <hr />
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
}

export default Article;

// <div>
// <h2>{article.title}</h1>
// <h3>Author: {article.author}</h3>
// <h4>Topic: {article.topic}</h3>
// <h5>{article.body}</h4>

// <div className="interact">

//   <ArticleVoter
//     article_id={this.props.article_id}
//     votes={article.votes}
//   />

//   <h5 className="a_comments">
//     {this.state.article.comment_count} - Comments
//   </h5>

//   <button
//     type="button"
//     class="btn btn-outline-danger delete-article-button"
//     onClick={event => this.handleDelete(event)}
//   >
//     Delete Post
//   </button>

// </div>
// <NewComment />
// <Comments article_id={this.props.article_id} />
// </div>
