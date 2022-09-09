import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  //things class components can do: State(dynamic data) | Lifecycle hook

  constructor() {
    super();
    // this is an intial state | starting state of something being called
    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: "eCommerce" },
        { title: "event", category: "Scheduling" },
        { title: "ministry Safe", category: "Enterprise" },
        { title: "SwingAway", category: "eCommerse" },
      ],
    };
    // you will have to do this for every custom function that deals with events
    this.handleFilter = this.handleFilter.bind(this);
  }

  portfolioItems() {
    // we want to loop over data and build a list of portfolio items with map()
    return this.state.data.map((item) => {
      //map() will loop through and adjust it to what you return
      // you will have to make a parent component have props as a argument then call title to it
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div> Loading...</div>;
    }
    return (
      //this is JSX code; looks liek html
      <div>
        <h2>Portfolio items go here updated...</h2>
        <h2> {this.state.pageTitle} </h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          {" "}
          eCommerce{" "}
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          {" "}
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          {" "}
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
