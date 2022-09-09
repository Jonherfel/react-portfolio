// need to import react first then anything else youd like | {} needed to importing without something using the default key work
import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router, //giving router and alias
  Switch,
  Route,
} from "react-router-dom";

// this is how you can get your code to show up on the browser | Once component is called put it on main app.js where you want it to show
import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";

//extending the component function inside the class App
export default class App extends Component {
  render() {
    // When you return something you can only return one div
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            {/* switch will allow for us to render only to that specific route
    Route as a component will take props, path is a prop 
    a Route with a "/" is a root route | the main route*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>

        <div> {moment().format("MMMM Do YYYY, h:mm:ss a")} </div>

        <PortfolioContainer />
      </div>
    );
  }
}
