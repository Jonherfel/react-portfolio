import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  admidLinks() {}

  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink to="/about-me">About</NavLink>
        <button>Contact</button>
        <button>Blog</button>
        {true ? <button>Add Blog</button> : null}
        <h4> Navigation Bar</h4>
      </div>
    );
  }
}
