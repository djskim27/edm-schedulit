import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import Show from './components/Show';
import Signup from './components/Signup';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import EditUserForm from './components/EditUserForm';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import styled from 'styled-components';



class App extends Component {
  constructor(){
        super();
        this.state = {
            loggedIn: false,
            users: [],
            user:[]
            
        }
    }

componentWillMount(){
  axios.get('/api/user').then((res)=>{
    console.log(res.data);
    this.setState({users: res.data})
    console.log(this.state.users)
  })
}

_updateUsers = (data) => {
  this.setState({users: data})
}



_logIn = () => {
    this.setState({
      loggedIn: true
      
    })
        }

_logOut = () => {
  
  this.setState({loggedIn: false});
    
  
}
_setLoggedInUser = (user) => {
  this.setState({
    user: user
  })
}

_logInAndPassNewUser = (user) => {
  this.setState({
    loggedIn:true,
    user: user
  })
}


  render() {
    return (
   
    <Router>
      
      <div>
        {this.state.loggedIn ? 
        <div>
        <Navbar inverse collapseOnSelect fixedTop >
          <Navbar.Header>
         
            <Navbar.Brand>
           <Link to={`/user/${this.state.user._id}/shows`}>Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
        
            <Nav pullRight>
              <Navbar.Brand><Link to={`/user/${this.state.user._id}`} style={{textDecoration:'none'}}>{this.state.user.userName}</Link></Navbar.Brand>
              <Navbar.Brand><Link to="/" onClick={this._logOut} style={{textDecoration:'none'}}>Log Out</Link> </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div> : 
        <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
         
            <Navbar.Brand>
           <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
        
            <Nav pullRight>
               <Navbar.Brand><Link to="/login" style={{textDecoration:'none'}}>Login</Link></Navbar.Brand>
              <Navbar.Brand> <Link to="/signup" style={{textDecoration:'none'}}>Sign Up</Link> </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div> 
        
        }
         
          <Route exact path="/" render={routeProps => 
          <Homepage {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            updateUsers={this._updateUsers}
            />} />

          <Route exact path="/signup" render={routeProps => 
          <Signup {...routeProps}
            login={this._logInAndPassNewUser}
          
          />}/>

          <Route exact path="/login" render={routeProps => 
          <Login {...routeProps}
            users={this.state.users}
            loggedIn={this.state.loggedIn}
            changeLogIn={this._logIn}
            />} />

          <Route exact path="/show/:showId" render={routeProps=>
          <Show {...routeProps}
          loggedIn={this.state.loggedIn}
          user={this.state.user}
          />}/>

          <Route exact path="/user/:userId" render={routeProps =>
           <UserProfile {...routeProps}
           user={this.state.user}
           updateUsers={this.state._updateUsers}
           logOut={this._logOut}
           />} />

           <Route exact path="/user/:userId/edit" render={routeProps =>
           <EditUserForm {...routeProps}
           user={this.state.user}
           setLoggedInUser={this._setLoggedInUser}
           
           />} />


          <Route exact path="/user/:userId/shows" render={routeProps => 
          <Homepage {...routeProps}
            loggedIn={this.state.loggedIn}
            setLoggedInUser={this._setLoggedInUser}
            updateUsers={this._updateUsers}
            />} />
          
      </div>
    </Router>
     
    
       
   
  
    );
  }
}

export default App;
