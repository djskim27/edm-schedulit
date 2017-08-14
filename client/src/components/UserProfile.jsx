import React, { Component } from 'react';

class UserProfile extends Component {
    render() {
        const username = this.props.user.userName;
        const firstName = this.props.user.firstName;
        const lastName = this.props.user.lastName;
        const email = this.props.user.email;
        const eventList = this.props.user.eventList
        console.log(eventList)
        return (
            <div>
                <div>Username: {username}</div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Email: {email}</div>
                {!eventList? null: <div>Hello</div>}
            </div>
        );
    }
}

export default UserProfile