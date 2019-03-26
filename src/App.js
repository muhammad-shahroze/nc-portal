import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/home/Home";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Nomatch from "./components/Nomatch";
import Article from "./components/Article";
import Header from "./components/Layout/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router className="container">
          <Home path="/" />
          <Topics path="/topics" />
          <Articles path="/articles" />
          <Nomatch default />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
