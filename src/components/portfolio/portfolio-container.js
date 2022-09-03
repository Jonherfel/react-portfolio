import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    //things class components can do: State(dynamic data) | Lifecycle hook

    constructor() {
        super();
        // this is an intial state | starting state of something being called
        this.state = { 
            pageTitle: "Welcome to my portfolio",
            data: [
                {title:"Quip"},
                {title: "event"},
                { title: "ministry Safe"},
                {title: "SwingAway"}
            ]

        }
    }

portfolioItems() {

// we want to loop over data and build a list of portfolio items with map()
    return this.state.data.map(item => {
        //map() will loop through and adjust it to what you return
        // you will have to make a parent component have props as a argument then call title to it
        return <PortfolioItem title={item.title} url={"google.com"} />;

    })
}

    render(){
        return(
            //this is JSX code; looks liek html
            <div>
                <h2>Portfolio items go here updated...</h2>
                <h2> {this.state.pageTitle} </h2>

                {this.portfolioItems()}
            </div>
        )
    }
}


/*
React Constructor Overview
 a constructor allows you to set an intitial state for a components and custom function
    - only in a class
    - built in key work 

Overview of Props
 define it in line with the component within map(e =>{return})
    return < component x={e} />
on the component file you will need to make sure you can pass in a props arguement
    call the key directly as well


Working with State in React 
 this.state = {}  is an intitial state, this is what you will get when it is first called
    - this. is referring to the the components instants
syntax | start in a class
construtor() { 
    super();
    this.state = {obj1: "x", obj2: "y"}
}
if you want to call this state in your project call the whole thing:
    this.state.obj */