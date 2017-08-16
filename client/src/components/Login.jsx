import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

const HigherContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Container = styled.div`
        margin-top: 50px;
    }
  `  
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    button {
    background-color: rgba(102,51,153, 1); 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    border-radius: 10px;
    margin: 5px 5px
    }

    button:hover {
    background-color: rgba(102,51,153, 0.4); /* Green */
    color: white;
    }
`

class Login  extends Component {


    render() {
      
        const users = this.props.users;
       
        

        
        return (
            <HigherContainer>
                <Container>
                    <h1 style={{color:'white', textAlign:'center'}}>Login</h1>
                
                    {users.map((user, i)=>{
                        return(
                            <ButtonDiv key={i}>
                                <Link to={`/user/${user._id}/shows`} onClick={this.props.changeLogIn}><button>{user.userName}</button></Link> 
                            </ButtonDiv>
                        )
                    })}
                    <div style={{color:'white', textAlign:'center'}}>Don't have an account? Sign up <Link to='/signup'>here</Link>!</div>
                </Container>
            </HigherContainer>
        );
    }
}

export default Login