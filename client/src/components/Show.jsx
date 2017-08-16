import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import YouTube from './YouTube';




const ShowContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
`
const YouTubeDiv = styled.div`
    margin-top: 70px;
    height: 425px;
    width: 425px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(102,51,153, 0.3);
    border-radius: 10px;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    button {
    background-color: rgba(102,51,153, 1); 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    border-radius: 10px;
    margin: 5px 5px
    }

    button:hover {
    background-color: rgba(102,51,153, 0.4); /* Green */
    color: white;
    }
`
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
            soundcloud:'',
            youtube:'',
            stringDate:'',
            userId: ''
            

        }
    }

    componentWillMount() {
        const id = this.props.match.params.showId;
        axios.get(`/api/shows/${id}`).then((res) => {
            console.log(res.data.artistList[0].soundCloud)
            this.setState({
                id: res.data._id,
                name: res.data.name,
                stringDate: res.data.stringDate,
                city: res.data.city,
                state: res.data.state,
                venue: res.data.venue,
                eventPage: res.data.eventPage,
                artistImage: res.data.artistList[0].imgUrl,
                soundcloud: res.data.artistList[0].soundCloud,
                youtube: res.data.artistList[0].youtubeUrl,

                
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
                <ShowContainer>
                        <div>
                        <YouTubeDiv>
                        <YouTube youtube={this.state.youtube}/>
                        </YouTubeDiv>
                        
                        <div style={{backgroundColor: 'rgba(46, 138, 138, 0.5)'}}>
                        <h2 style={{color: 'white'}}>Artist: {this.state.name}</h2>
                        <h3 style={{color: 'white'}}>Date: {this.state.stringDate}</h3>
                        <h3 style={{color: 'white'}}>City/State: {this.state.city}/{this.state.state}</h3>
                        <h3 style={{color: 'white'}}>Venue: {this.state.venue}</h3>
                        <ButtonDiv>
                        <a href={this.state.eventPage} target='blank'> <button>Buy Tickets</button></a>
                        <a href={this.state.soundcloud} target='blank'> <button>Soundcloud</button></a>
                        {this.props.loggedIn ? <button onClick={this._addEventToUser}>Add Event</button> : null}
                        
                        </ButtonDiv>
                        </div>
                    </div>

                </ShowContainer>
            )
        }
    }
}

export default Show

