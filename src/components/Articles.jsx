import React from 'react';
import { fetchArticles } from '../utils/API-Requests';

class Articles extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    // if this.props.topic, fetchArticlesByTopic, else
    fetchArticles().then(articles => {
      this.setState({ articles })
    })
  }

  render() {
    const { articles } = this.state;
    return <ul>
      {articles.map(article => {
        return <li>
          <h3>{article.title}</h3>
          <h5>{article.topic}</h5>
          <h5>{article.author}</h5>
          <p>{article.body}</p>
        </li>
      })}
    </ul>
  }
}

export default Articles