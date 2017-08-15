import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'


class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            loggedOut: false,
            user:[]
        }
    }

    componentWillMount(){
        axios.get(`/api/user/${this.props.match.params.userId}`).then((res)=> {
            console.log(res.data)
            this.setState({user:res.data})
        }).catch((err)=> {
            console.log(err);
        })
    }

    _deleteUser = () => {

        axios.get(`/api/user/${this.props.match.params.userId}/delete`).then((res) => {
            console.log('user deleted!');
            this.props.logOut();
            this.setState({loggedOut: true});
            this.props.updateUsers();
        }).catch((err) => {
            console.log(err);
        })
        

    }
    // _deleteUserAndLogOut = () => {
    //     this.props.deleteUser();
    //     this.props.logOut();
    //     this.setState({ loggedOut: true })
    // }


    render() {
        const username = this.state.user.userName;
        const firstName = this.state.user.firstName;
        const lastName = this.state.user.lastName;
        const email = this.props.user.email;
        const userId = this.props.user._id;
        const showsList = this.props.user.showsList
        if (this.state.loggedOut) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <div>Username: {username}</div>
                    <div>First Name: {firstName}</div>
                    <div>Last Name: {lastName}</div>
                    <div>Email: {email}</div>
                    {!showsList ? null : <div>Hello</div>}

                    <div>
                        <Link to={`/user/${userId}/edit`}><input type='submit' value="Edit User" /></Link>
                    </div>
                    <div>
                        <input type='submit' value="Delete User" onClick={this._deleteUser} />
                    </div>
                </div>
            );
        }
    }
}

export default UserProfile