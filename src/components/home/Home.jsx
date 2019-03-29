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
    sortdropdownOpen: false
  };

  componentDidMount() {
    fetchArticles().then(articles =>
      this.setState({
        articles
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
    fetchArticles(topic).then(articles => {
      this.setState({
        articles
      });
    });
  };

  sortArticles = (sortBy, order) => {
    fetchArticles(null, sortBy, order).then(articles => {
      this.setState({
        articles
      });
    });
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
      </div>
    );
  }
}

export default Home;
