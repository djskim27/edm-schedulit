import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';


class Show extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            city: '',
            state: '',
            venue: '',
            eventPage: '',
            artistImage: '',
            userId: ''

        }
    }

    componentWillMount() {
        const id = this.props.match.params.showId;
        axios.get(`/api/shows/${id}`).then((res) => {
            console.log(res.data.artistList[0].imgUrl)
            this.setState({
                id: res.data._id,
                name: res.data.name,
                city: res.data.city,
                state: res.data.state,
                venue: res.data.venue,
                eventPage: res.data.eventPage,
                artistImage: res.data.artistList[0].imgUrl,
                redirect: false
            })

        }).catch((err) => {
            console.log(err);
        })
    }
    _addEventToUser = (e) => {
        e.preventDefault();
        axios.post(`/api/user/${this.props.user._id}/add/${this.props.match.params.showId}`).then((res) => {
            this.setState({ redirect: true });
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={`/user/${this.props.user._id}/shows`} />
        } else {

            return (
                <div>

                    <img src={this.state.artistImage} />

                    <h3>Name: {this.state.name}</h3>
                    <p>Location: {this.state.venue} in {this.state.city}, {this.state.state} </p>
                    <a href={this.state.eventPage} target='blank'>Buy Tickets</a>
                    {this.props.loggedIn ? <button onClick={this._addEventToUser}>Add Event</button> : null}


                </div>
            )
        }
    }
}

export default Show
