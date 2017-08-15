import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'


class UserProfile extends Component {
    constructor(){
        super()
        this.state={
            loggedOut: false
        }
    }

    _deleteUserAndLogOut = () => {
        this.props.deleteUser();
        this.props.logOut();
        this.setState({loggedOut: true})
    }


    render() {
        const username = this.props.user.userName;
        const firstName = this.props.user.firstName;
        const lastName = this.props.user.lastName;
        const email = this.props.user.email;
        const userId = this.props.user._id;
        const showsList = this.props.user.showsList
        if(this.state.loggedOut) {
            return <Redirect to='/' />
        } else {
        return (
            <div>
                <div>Username: {username}</div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Email: {email}</div>
                {!showsList? null: <div>Hello</div>}
                
                <div>
                    <Link to={`/user/${userId}/edit`}><input type='submit' value="Edit User"/></Link>
                </div>
                <div>
                    <input type='submit' value="Delete User" onClick={this._deleteUserAndLogOut}/>
                </div>
            </div>
        );
        }
    }
}

export default UserProfile