import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import UserShowList from './UserShowList';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    margin-top: 6%;
   font: white;
   background: rgba(102,51,153, 0.3);
   border: rgba(255,255,255,0.5) 10px solid;
   border-radius: 10px;
   padding: 10px
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    button {
    background-color: rgba(102,51,153, 1); 
    border: none;
    color: white;
    padding: 13px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 10px;
    margin: 5px 5px
    }

    button:hover {
    background-color: rgba(102,51,153, 0.4); /* Green */
    color: white;
    }
`
const EventsContainer = styled.div`

`

class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            loggedOut: false,
            user: {
                _id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                showsList: []
            }
        }
    }

    componentWillMount() {
        axios.get(`/api/user/${this.props.match.params.userId}`).then((res) => {
            console.log(res.data)
            this.setState({
                user: {
                    _id: res.data._id,
                    userName: res.data.userName,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    password: res.data.password,
                    showsList: res.data.showsList
                },
                redirect: false
            })
        }).catch((err) => {
            console.log(err);
        });


    }

    _deleteUser = () => {

        axios.get(`/api/user/${this.props.match.params.userId}/delete`).then((res) => {
            console.log('user deleted!');
            this.props.logOut();
            this.setState({ loggedOut: true });
            this.props.updateUsers();
        }).catch((err) => {
            console.log(err);
        })


    }



    render() {
        const username = this.state.user.userName;
        const firstName = this.state.user.firstName;
        const lastName = this.state.user.lastName;
        const email = this.props.user.email;
        const userId = this.props.user._id;
        const showsList = this.props.user.showsList;
        console.log(showsList)
        if (this.state.loggedOut) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ProfileContainer>
                        <h1 style={{color:'white'}}>{username}'s Profile Info</h1>
                        
                        <div style={{color:'white'}}>First Name: {firstName}</div>
                        
                        <div style={{color:'white'}}>Last Name: {lastName}</div>
                        
                        <div style={{color:'white'}}>Email: {email}</div>
                      </ProfileContainer>
                    </div>
                
                    <ButtonDiv>
                        <Link to={`/user/${userId}/edit`}><button>Edit Profile</button></Link>
                        <button onClick={this._deleteUser}>Delete Profile</button>
                    </ButtonDiv>
                    
                       
                    
                    {showsList.length === 0 ?
                        <div>You have no shows!</div>
                        :
                        <UserShowList
                            shows={showsList}
                            userId={userId}
                            deleteShow={this._deleteShow}
                            redirect={this.state.redirect}
                            username={username}
                             />}
              
                </div>
            );
        }
    }
}

export default UserProfile