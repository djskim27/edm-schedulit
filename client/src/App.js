import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './components/Homepage';
import Show from './components/Show';
import Signup from './components/Signup';
import Login from './components/Login';


class App extends Component {
  render() {
    return (

    <Router>
      <div>
        <div>
          <Link to="/">Go Home</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Login</Link>
          
        </div>
       
        <div>
         
          <Route exact path="/" component={Homepage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/show/:showId" component={Show}/>  
         

         
          
        </div>
        </div>
    </Router>
     
       
   
  
    );
  }
}

export default App;
