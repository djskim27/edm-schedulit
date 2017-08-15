import React, { Component } from 'react';
import axios from 'axios'

class EditUserForm extends Component {
    constructor(){
        super();
        this.state = {
            
                userName:'',
                firstName:'',
                lastName:'',
                email:''
        

        }
    }

     _handleChange =(e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newUser = {...this.state}
        newUser[attributeName]=attributeValue;
        this.setState(newUser);
    }

    _editUser = (e) => {
        e.preventDefault();
        axios.put(`/api/user/${this.props.user.userId}`, this.state).then((res)=> {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <h1>Edit User Form</h1>
                
                    <form onSubmit={this._editUser}>
                    <div>
                    <input name="userName" type="text" placeholder={this.props.user.userName} onChange={this._handleChange} required/>
                    </div>
                    <div>
                    <input name="firstName" type="text" placeholder={this.props.user.firstName} onChange={this._handleChange} required/>
                    </div>
                    <div>       
                    <input name="lastName" type="text" placeholder={this.props.user.lastName} onChange={this._handleChange} required/>
                    </div>
                    <div>
                    <input name="email" type="text" placeholder={this.props.user.email} onChange={this._handleChange} required/>
                    </div>
                    <input type='submit'/>
                </form>
                
            </div>
        );
    }
}

export default EditUserForm;