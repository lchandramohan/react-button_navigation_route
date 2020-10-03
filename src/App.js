import React, {Component} from "react";
import "./style.css";
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import details from './details.js';


export default class App extends Component {

   try = () => {
     alert("ASD");
      this.props.history.push('/details');
  }
render(){


  return (
    <div>
    <Router>
      <h1>Hello StackBlitz!</h1>
     <div>
     <input type="text" id="txt" />
     <button onClick ={this.try} > submit</button>
      <Route path="/details" component={details}/>
     </div>
      <Route exact path="/" component={App} />
        
     </Router>
    </div>
  );
  }
}
