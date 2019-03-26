import React from "react";
import { Link } from "@reach/router";
import { Card, Badge } from "react-bootstrap";
let moment = require("moment");

function ArticleList({ articles }) {
  return articles.map(article => {
    return (
      <Card
        className="articles-list-card d-flex flex-row mb-2 rounded-0"
        bg="dark"
        text="white"
        key={article.article_id}
      >
        <div className="h-100 voting-container d-flex flex-column text-center">
          <i className="fa fa-arrow-up text-success" aria-hidden="true" />
          <span>{article.votes}</span>
          <i className="fa fa-arrow-down text-danger" aria-hidden="true" />
        </div>
        <div className="content w-100">
          <Card.Body>
            <h5 className="float-left font-weight-bold">
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </h5>
            <Badge className="float-right" variant="warning">
              {" "}
              {article.topic}
            </Badge>
            <div className="clearfix" />
            <h6 className="font-weight-light">Posted by: {article.author}</h6>
            <Card.Text className="block-with-text">{article.body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {article.comment_count} Comments
            </small>
            <small className="text-info float-right">
              date posted - {moment(article.created_at).format("YYYY MM DD")}
            </small>
          </Card.Footer>
        </div>
      </Card>
    );
  });
}

export default ArticleList;
