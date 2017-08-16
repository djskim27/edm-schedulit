import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

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

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            redirect: false,
            userId:''
           
        }
    }

    _handleChange =(e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newUser = {...this.state}
        newUser[attributeName]=attributeValue;
        this.setState(newUser);
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/user/signup', this.state).then((res) =>{
            console.log(res.data);
            this.setState({
                userId: res.data._id,
                redirect: true
            });
            this.props.login(res.data);
        }).catch(err => console.log(err));
    };
    render() {
        if(this.state.redirect){
            return <Redirect to={`/user/${this.state.userId}/shows`}/>
        } else {
        return (
            <HigherContainer>
            <Container>
                <h1 style={{color: 'white'}}>Create A New User</h1>
                 <form onSubmit={this._handleSubmit}>
                    <div>
                    
                    <input name="userName" type="text" placeholder="Choose A Username" onChange={this._handleChange}required/>
                    </div>
                    <div>
                    
                    <input name="password" type="text" placeholder="Password" onChange={this._handleChange}required/>
                    </div>
                    <div>
                    <input name="firstName" type="text" placeholder="First Name" onChange={this._handleChange} required/>
                    </div>
                    <div>       
                    <input name="lastName" type="text" placeholder="Last Name" onChange={this._handleChange} required/>
                    </div>
                    <div>
                    <input name="email" type="text" placeholder="Email Address" onChange={this._handleChange} required/>
                    </div>
                    <input type='submit'/>
                </form>
            </Container>
            </HigherContainer>
        );
        }
    }
}

export default Signup