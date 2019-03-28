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
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Small button
          </button>
          <div class="dropdown-menu">...</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            Small split button
          </button>
          <button
            type="button"
            class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">...</div>
        </div>
        <br />
        <CreateTools />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default Home;
