import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const HigherContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Container = styled.div`
        margin-top: 50px;
    }
  `  


class EditUserForm extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
                user: {
                    _id:'',
                    userName:'',
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    showsList:[]
                }
        

        }
    }

    componentWillMount(){
        axios.get(`/api/user/${this.props.match.params.userId}`).then((res)=>{
            this.setState({
                user: {
                    _id: res.data._id,
                    userName: res.data.userName,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    password: res.data.password,
                    showsList: res.data.showsList
                }
            });
            console.log(this.state.user);
        }).catch((err) =>{
            console.log(err);
        })
    }

     _handleChange =(e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const user = {...this.state.user}
        user[attributeName]=attributeValue;
        this.setState({user});
    }

    _editUser = (e) => {
        e.preventDefault();
        axios.put(`/api/user/${this.props.user.userId}`, this.state.user).then((res)=> {
            console.log(this.state.user);
            this.setState({redirect: true});
            this.props.setLoggedInUser(this.state.user);
        }).catch((err) => console.log(err))
       
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.state.user._id}`}/>
        } else {
        return (
            <HigherContainer>
            <Container>
                <h1 style={{color:'white'}}>Edit User Form</h1>
                
                    <form onSubmit={this._editUser}>
                    <div>
                    <input name="userName" type="text" placeholder={this.props.user.userName} onChange={this._handleChange}/>
                    </div>
                    <div>
                    <input name="firstName" type="text" placeholder={this.props.user.firstName} onChange={this._handleChange} />
                    </div>
                    <div>       
                    <input name="lastName" type="text" placeholder={this.props.user.lastName} onChange={this._handleChange} />
                    </div>
                    <div>
                    <input name="email" type="text" placeholder={this.props.user.email} onChange={this._handleChange} />
                    </div>
                    <input type='submit'/>
                </form>
                
            </Container>
            </HigherContainer>
        );
        }
    }
}

export default EditUserForm;