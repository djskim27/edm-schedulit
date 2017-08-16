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

const navBarStyle = {
  background: "rgba(220, 115, 11, 0.5)"
}

const logoStyle = {
  width: '100px'
}


const Body = styled.div`
  background: url('https://s-media-cache-ak0.pinimg.com/originals/b6/58/41/b658411959379636d322b0e63a19bba7.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`




  



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
      
      <Body>
        {this.state.loggedIn ? 
        <div>
        <Navbar inverse collapseOnSelect fixedTop style={navBarStyle}>
          <Navbar.Header>
         
            <Navbar.Brand>
           <Link to={`/user/${this.state.user._id}/shows`}>Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
        
            <Nav pullRight>
              <NavItem eventKey={1}><Link to={`/user/${this.state.user._id}`} style={{textDecoration:'none'}}>{this.state.user.userName}</Link></NavItem>
              <NavItem eventKey={2}><Link to="/" onClick={this._logOut} style={{textDecoration:'none'}}>Log Out</Link></NavItem>
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
              <NavItem eventKey={1}><Link to="/login" style={{textDecoration:'none'}}>Login</Link></NavItem>
              <NavItem eventKey={2}> <Link to="/signup" style={{textDecoration:'none'}}>Sign Up</Link></NavItem>
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

          

    

         
          
      </Body>
    </Router>
     
    
       
   
  
    );
  }
}

export default App;
