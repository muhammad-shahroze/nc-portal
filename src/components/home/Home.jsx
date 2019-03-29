import React, { Component } from "react";
import { fetchArticles } from "../../utils/API-Requests";
import CreateTools from "./CreateTools";
import ArticleList from "./ArticleList";
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {
    articles: [],
    filterdropdownOpen: false,
    sortdropdownOpen: false,
    total_count: 0,
    currentPage: 1
  };

  componentDidMount() {
    fetchArticles().then(({ articles, total_count }) =>
      this.setState({
        articles,
        total_count
      })
    );
  }

  toggleSort = () => {
    this.setState({
      sortdropdownOpen: !this.state.sortdropdownOpen
    });
  };

  togglefilter = () => {
    this.setState({
      filterdropdownOpen: !this.state.filterdropdownOpen
    });
  };

  filterByTopic = topic => {
    fetchArticles(topic).then(({ articles }) => {
      this.setState({
        articles
      });
    });
  };

  sortArticles = (sortBy, order) => {
    fetchArticles(null, sortBy, order).then(({ articles }) => {
      this.setState({
        articles
      });
    });
  };

  getArticlesByPage = pageNumber => {
    const totalPages = Math.ceil(this.state.total_count / 10);
    console.log(pageNumber);
    if (pageNumber === 0) {
      this.setState({ currentPage: 1 });
    } else if (pageNumber > totalPages) {
      this.setState({ currentPage: totalPages });
    } else {
      fetchArticles(null, null, null, pageNumber).then(({ articles }) => {
        this.setState({
          articles,
          currentPage: pageNumber
        });
        window.scroll(0, 0);
      });
    }
  };

  getNumberOfPages = () => {
    const totalPages = Math.ceil(this.state.total_count / 10);
    let pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(
        <li
          className="page-item"
          key={i}
          onMouseDown={() => this.getArticlesByPage(i)}
        >
          <a className="page-link">{i}</a>
        </li>
      );
    }
    return pagesArray;
  };

  render() {
    return (
      <div>
        <Row
          className=""
          style={{ width: "200px", position: "relative", top: 40 }}
        >
          <Col>
            <ButtonDropdown
              className="filter-dropdown"
              isOpen={this.state.filterdropdownOpen}
              toggle={this.togglefilter}
            >
              <DropdownToggle caret color="secondary" size="sm">
                Filter
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.filterByTopic()}>
                  All
                </DropdownItem>
                <DropdownItem onClick={() => this.filterByTopic("football")}>
                  Football
                </DropdownItem>
                <DropdownItem onClick={() => this.filterByTopic("cooking")}>
                  Cooking
                </DropdownItem>
                <DropdownItem onClick={() => this.filterByTopic("coding")}>
                  Coding
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
              className="sort-dropdown ml-2"
              isOpen={this.state.sortdropdownOpen}
              toggle={this.toggleSort}
            >
              <DropdownToggle caret color="secondary" size="sm">
                Sort
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.sortArticles()}>
                  All
                </DropdownItem>
                <DropdownItem onClick={() => this.sortArticles("created_at")}>
                  Date
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.sortArticles("comment_count")}
                >
                  Comments
                </DropdownItem>
                <DropdownItem onClick={() => this.sortArticles("votes")}>
                  Votes
                </DropdownItem>
                <DropdownItem onClick={() => this.sortArticles(null, "asc")}>
                  Order - Top
                </DropdownItem>
                <DropdownItem onClick={() => this.sortArticles(null, "desc")}>
                  Order - Bottom
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <CreateTools />
        <ArticleList articles={this.state.articles} />
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onMouseDown={() => {
                this.setState({ currentPage: this.state.currentPage - 1 }, () =>
                  this.getArticlesByPage(this.state.currentPage)
                );
              }}
            >
              <a className="page-link">Previous</a>
            </li>
            {this.getNumberOfPages().map(page => {
              return page;
            })}
            <li
              className="page-item"
              onMouseDown={() => {
                this.setState({ currentPage: this.state.currentPage + 1 }, () =>
                  this.getArticlesByPage(this.state.currentPage)
                );
              }}
            >
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
