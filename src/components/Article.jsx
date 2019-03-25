import React, { Component } from "react";
import { getArticleById, deleteArticle } from "../utils/API-Requests";
import { navigate } from "@reach/router";
import Comments from "./Comments";
import ArticleVoter from "./ArticleVoter";
import NewComment from "./NewComment";

class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  handleDelete = event => {
    deleteArticle(this.props.article_id).then(() => navigate(`/articles`));
  };

  render() {
    const { article } = this.state;
    return (
      <div>
        <h1>{article.title}</h1>
        <h3>Author: {article.author}</h3>
        <h3>Topic: {article.topic}</h3>
        <h4>{article.body}</h4>
        <div className="interact">
          <ArticleVoter
            article_id={this.props.article_id}
            votes={article.votes}
          />
          <h5 className="a_comments">
            {this.state.article.comment_count} - Comments
          </h5>
          <button
            type="button"
            class="btn btn-outline-danger delete-article-button"
            onClick={event => this.handleDelete(event)}
          >
            Delete Post
          </button>
        </div>
        <NewComment />
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
}

export default Article;
