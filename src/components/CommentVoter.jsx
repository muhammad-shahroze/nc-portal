import React, { Component } from "react";
import { patchArticleVotes } from "../utils/API-Requests";

class CommentVoter extends Component {
  state = {
    voteChange: 0,
    hasError: false
  };

  handleVoteClick = voteChange => {
    const { comment_id } = this.props;
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }));
    patchArticleVotes(comment_id, voteChange).catch(err => {
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
          <p className="p1"> {votes + voteChange} </p>
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

export default CommentVoter;
