/*
React Constructor Overview
 a constructor allows you to set an intitial state for a components and custom function
    - only in a class
    - built in key work 

_________________________________________________________________

Overview of Props
 define it in line with the component within map(e =>{return})
    return < component x={e} />
on the component file you will need to make sure you can pass in a props arguement
    call the key directly as well
________________________________________________________________________

Working with State in React 
 this.state = {}  is an intitial state, this is what you will get when it is first called
    - this. is referring to the the components instants
syntax | start in a class
construtor() { 
    super();
    this.state = {obj1: "x", obj2: "y"}
}
if you want to call this state in your project call the whole thing:
    this.state.obj     
   
_________________________________________________________________________

How to Change State Values in React

    goal: click a button and update our page title through changing the state value
    - make a function using this.setstate() | this is a built in function
    - to make sure a button can use this new function we need to make sure it has access to that data
        so we put it in the constructor with a variable
        -this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
        * we need to tie the function and bound it to this instance of the component
    - click listeners need to be connect directly to the function

    ----------------------------------------------------------------------------

How to Build a Data Filter in React (handleFilter(filter))
    use  filter()  to loop over something and choose which elements we want 
        - const x = arr.filter(el =>{ return el === z})  |
    - we set the desired element as the argument to the function
    - create an anonymous function because function with () in buttons will cause errors
        the will try to run automatically

            data: [
                {title:"Quip", category: "eCommerce"},
                {title: "event" category: "Scheduling"},
                { title: "ministry Safe". category: "Enterprise"},
                {title: "SwingAway", category: "eCommerse"}
            ]     
 <button onClick={() => this.handleFilter("eCommerce")}> eCommerce </button>
<button onClick={() => this.handleFilter("Scheduling")}> Scheduling</button>
<button onClick={() => this.handleFilter("Enterprise")}> Enterprise</button>

when we click on one of these buttons it updates the state and throws away the other items

_____________________________________________________________________________

Introduction to React Conditionals

    conditional logic: allow for certain users to be allowed to have access 
        Ex: isLoading
            we can make the whole render act like a elif statement having
            other returns before our another return call. if the first is true
            it will stop there, if it is false it will continue.

____________________________________________________________________________

How to Use Ternary Operators in JSX Code to Implement Conditional Behavior

Creating a NAV bar
    Once the nav bar page is made and imported to app.js we want
    certaint content to only be seen by an admin we do this with
    a ternary operator
    'asdf'=== 'asdf' ? 'yay' : 'nay'
    if this === to this ?(then do) this :(if its not equal do) this

    to put the condition in JSX you put it directly into the thing
    that would render
    ex:   {true? <button>Add Blog</button> : null}

    __________________________________________________________________

Basic Route Setup in React

routing is going from one page to another 

Route:
     is a component we brought in
    like any component it takes props, one prop is path
    (ex: this.props.path)
    this directs user to where we want it to go
    then we put in what component (code) we want it to pull in

    exact: this route will only be true if it only has "/"


    ______________________________________________________________________

Overview of React Router NavLinks
    How to use links as react specific links

    Navlinks are a component given by react router dom
        ex: <NavLink to="/location"> </Navlink>

____________________________________________________


Overview of the Link Component in React

    Link component: 
            similar to NavLink

*/
