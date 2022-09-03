// need to import react first then anything else youd like | {} needed to importing without something using the default key work
import React, { Component } from 'react';
import moment from 'moment';

// this is how you can get your code to show up on the browser | Once component is called put it on main app.js where you want it to show
import PortfolioContainer from './portfolio/portfolio-container';


//extending the component function inside the class App
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
          <div> {moment().format('MMMM Do YYYY, h:mm:ss a')} </div>         
          <PortfolioContainer /> 
      </div>
    );
  }
}
