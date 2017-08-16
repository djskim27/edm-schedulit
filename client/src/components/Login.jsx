import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
        margin-top: 50px;
    }
  `  


class Login  extends Component {

    


    render() {
      
        const users = this.props.users;
       
        

        
        return (
            <Container>
                <h1>Login</h1>
            
                {users.map((user, i)=>{
                    return(
                        <div key={i}>
                             <Link to={`/user/${user._id}/shows`} onClick={this.props.changeLogIn}><h3>{user.userName}</h3></Link> 
                        </div>
                    )
                })}
                <div>Don't have an account? Sign up <Link to='/signup'>here</Link>!</div>
            </Container>
        );
    }
}

export default Login