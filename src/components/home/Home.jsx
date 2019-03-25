import React, { Component } from "react";
import { fetchArticles } from "../../utils/API-Requests";
import CreateTools from "./CreateTools";
import ArticleList from "./ArticleList";
import "./Home.css";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles().then(articles =>
      this.setState({
        articles
      })
    );
  }

  render() {
    return (
      <div>
        <br />
        <CreateTools />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default Home;
