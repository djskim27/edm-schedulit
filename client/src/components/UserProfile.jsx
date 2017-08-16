import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import UserShowList from './UserShowList';
import styled from 'styled-component';



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
                    <div>Username: {username}</div>
                    <div>First Name: {firstName}</div>
                    <div>Last Name: {lastName}</div>
                    <div>Email: {email}</div>
                    <div>
                        <Link to={`/user/${userId}/edit`}><input type='submit' value="Edit User" /></Link>
                    </div>
                    <div>
                        <input type='submit' value="Delete User" onClick={this._deleteUser} />
                    </div>
                    {showsList.length === 0 ?
                        <div>You have no shows!</div>
                        :
                        <UserShowList
                            shows={showsList}
                            userId={userId}
                            deleteShow={this._deleteShow}
                            redirect={this.state.redirect}
                             />}
                </div>
            );
        }
    }
}

export default UserProfile