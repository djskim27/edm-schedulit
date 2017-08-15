import React, { Component } from 'react';

class UserProfile extends Component {

    _deleteUserAndLogOut = () => {
        this.props.deleteUser();
        this.props.logOut();
    }
    render() {
        const username = this.props.user.userName;
        const firstName = this.props.user.firstName;
        const lastName = this.props.user.lastName;
        const email = this.props.user.email;
        const userId = this.props.user._id;
        const eventList = this.props.user.eventList
        
        return (
            <div>
                <div>Username: {username}</div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Email: {email}</div>
                {!eventList? null: <div>Hello</div>}
                <div>
                    <input type='submit' value="Delete User" onClick={this._deleteUserAndLogOut}/>
                </div>
            </div>
        );
    }
}

export default UserProfile