import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './components/Homepage';
import Show from './components/Show';
import Signup from './components/Signup';
import Login from './components/Login';
import UserProfile from './components/UserProfile'


class App extends Component {
  constructor(){
        super();
        this.state = {
            loggedIn: false,
            userId:'',
            
        }
    }

  render() {
    return (

    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Login</Link>
          
        </div>
       
        <div>
         
          <Route exact path="/" component={Homepage} loggedIn={this.state.loggedIn}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login} loggedIn={this.state.loggedIn}/>
          <Route exact path="/show/:showId" component={Show} loggedIn={this.state.loggedIn}/>
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/user/:userId/shows" component={Homepage} loggedIn={this.state.loggedIn}/>

         

         
          
        </div>
        </div>
    </Router>
     
       
   
  
    );
  }
}

export default App;
