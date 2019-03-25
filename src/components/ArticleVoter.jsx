import React, { Component } from "react";
import { patchArticleVotes } from "../utils/API-Requests";
import "../styling/a-voter.css";

class ArticleVoter extends Component {
  state = {
    voteChange: 0,
    hasError: false
  };

  handleVoteClick = voteChange => {
    const { article_id } = this.props;
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }));
    patchArticleVotes(article_id, voteChange).catch(err => {
      this.setState({
        hasError: true
      });
    });
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <div>
          <button
            className="btn btn-outline-success vote-1"
            onClick={() => this.handleVoteClick(1)}
          >
            ▲ Vote up
          </button>
          <p className="vote-count"> {votes + voteChange} </p>
          <button
            className="btn btn-outline-danger vote-2"
            onClick={() => this.handleVoteClick(-1)}
          >
            ▼ Vote down!
          </button>
        </div>
      </>
    );
  }
}

export default ArticleVoter;
