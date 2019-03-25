import React, { Component } from "react";
import { fetchArticles, fetchUsers } from "../../utils/API-Requests";
import CreateTools from "./CreateTools";
import ArticleList from "./ArticleList";
import AllUsersModal from "./AllUsersModal";
import "./Home.css";

class Home extends Component {
  state = {
    articles: [],
    users: []
  };

  componentDidMount() {
    fetchArticles().then(articles =>
      this.setState({
        articles
      })
    );
  }

  getAllUsers = () => {
    fetchUsers().then(users => {
      this.setState({ users });
    });
  };

  render() {
    return (
      <div>
        <br />
        <AllUsersModal users={this.state.users} />
        <CreateTools />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default Home;
