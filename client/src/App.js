import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
            users: [],
            user:[]
            
        }
    }
// _login = (e) => {
//     e.preventDefault();

//     const username = e.target.userName.value;
//     const password = e.target.password.value;

//   axios.post('/api/user/login', {username, password}).then((res) => {

//     const newState = {...this.state}

//     if(res.data.userName){
//       newState.loggedIn = true;
//       newState.userId = res.data._id;
//       newState.userName = res.data.userName;
//       newState.showsList = [];

//     }
//     this.setState(newState);
//   }).catch((err)=>{
//     console.log(err);
//   })
// }
componentWillMount(){
  axios.get('/api/user').then((res)=>{
    console.log(res.data);
    this.setState({users: res.data})
    console.log(this.state.users)
  })
}

_logIn = () => {
    this.setState({
      loggedIn: true
      
    })
        }

_setLoggedInUser = (user) => {
  this.setState({
    user: user
  })
}
  render() {
    return (

    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
          <br/>
          {this.state.loggedIn ? 
          <div>
          {this.state.user.userName}
          </div> : 
            <div>
            <Link to="/signup">Sign Up</Link>
            <br/>
            <Link to="/login">Login</Link>
            </div>}
          
          
        </div>
       
        <div>
         
          <Route exact path="/" render={routeProps => 
          <Homepage {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
          
            />} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" render={routeProps => 
          <Login {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            changeLogIn={this._logIn}
            />} />
          <Route exact path="/show/:showId" component={Show}/>
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/user/:userId/shows" render={routeProps => 
          <Homepage {...routeProps}
            loggedIn={this.state.loggedIn}
            setLoggedInUser={this._setLoggedInUser}
          
            />} />

    

         
          
        </div>
        </div>
    </Router>
     
    
       
   
  
    );
  }
}

export default App;
