import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
let throttle = require('lodash.throttle');

class InfiniteScroll extends Component {
  state = {
    data: [],
    isLoading: true,
    page: 1,
    hasAllItems: false
  }
  render() {
    //destructure from state and props
    return (
    <section className="dataList">
    {/* loading condition 
    map over data */}
    </section>
    )
  }

  componentDidMount() {
    this.fetchData();
    this.addScrollEventListener();
  }

  componentDidUpdate(prevprops, prevstate) {
    // conditions to fetch next batch of data, based on changes to page
  }

  addScrollEventListener = () => {
    document.querySelector(".datalist").addEventListener("scroll", this.handleScroll) //for scrolling within component
    window.addEventListener("scroll", this.handleScroll) //for scrolling within app / full window
  }

  handleScroll = throttle((event) => {
    const {clientHeight, scrollTop, scrollHeight} = event.target //for scrolling within component 
    const distanceFromTop = window.scrollY; //for scrolling within window / app
    const heightOfScreen = window.innerHeight; //for scrolling within window / app
    const documentHeight = document.body.scrollHeight; //for scrolling within window / app

    if (distanceFromBottomCondition) {
      //update page / do something to get next page of data
    }
  }, 2000) // `npm i lodash.throttle`

  fetchData = () => {
    api.getData(arguments).then((response) => {
      //use response to update state with new data
    })
    .catch(err => {
      /* */
    })
  }
  }



export default InfiniteScroll;
