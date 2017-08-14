import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password:''
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
            console.log('Success!');
        }).catch(err => console.log(err));
    };
    render() {
        return (
     <div>
                <h1>Create A New User</h1>
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
            </div>
        );
    }
}

export default Signup