import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/home/Home";
import ArticleList from "./components/home/ArticleList";
import Nomatch from "./components/Nomatch";
import Article from "./components/Article";
import Header from "./components/Layout/Header";
import { fetchArticles } from "./utils/API-Requests";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetchArticles().then(({ articles }) => {
      const filteredArticles = articles.filter(article => {
        if (
          article.author === JSON.parse(localStorage.getItem("user")).username
        ) {
          return article;
        }
      });
      this.setState({
        articles: filteredArticles
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router className="container">
          <Home path="/" />
          {
            <ArticleList
              path="/articles"
              key={this.state.articles.article_id}
              articles={this.state.articles}
            />
          }
          <Nomatch default />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
