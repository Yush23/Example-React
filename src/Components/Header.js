/* This is an example of a functional component. We make this component functional instead
of stateful because we none of the data associated with this component changes over time.

Notice that we can use props to indicate the name of the person we want to welcome in the header component.
However, there is no way of dynamically changing this value in our app at this time. Therefore this component is functional.

Notice how the props 'name' and 'loggedIn' are passed through to this functional Component in App.js. */

import React from 'react';

// import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom';
import App from '../App';
import Login from './Login.js';
import "./Header.css"

// ReactDOM.render(<App />, document.getElementById('app'));

var getUsername = sessionStorage.getItem("username");
var getUserPW = sessionStorage.getItem("userpw");




function Header(props) {

	/*Notice the use of the tenary/conditional operator below. If the value of props.loggedIn is true, then we say 'Hello' 
	to that user, else we say 'Please log in.' More about the tenary operator here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
 
	if(props.loggedIn){
		return 	<h1 style={ {fontStyle: "italic"} }>{props.loggedIn ? `Hello, ${props.name}` : 'Please Sign in'}</h1>;
	}
	else{

		return <Login />
	}

}

/* To be able to use the code that we have written in this module in a different module (i.e. JavaScript file),
then we have to export the code that we want to make available outside of this module. Below we export the function called 'Header'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Header;