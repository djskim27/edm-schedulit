import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

const ArtistImage = styled.div`
        
    img {
        display:inline-block;
        height: 50px;
        width: 50px;
    }

`
const inlineDiv = styled.div`
    display: inline-block;
`

export default class UserShow extends Component {
    constructor(){
        super();
        this.state={
            redirect: false,
        }
    }

    _deleteShow = (e)=>{
        e.preventDefault();
        axios.delete(`/api/user/${this.props.userId}/shows/${this.props.show._id}/delete`).then((res)=> {
            console.log('Hello');
            this.setState({redirect:true});
        }).catch((err)=> {console.log(err)});
    }
    
    render() {
        
        if(this.state.redirect){
            return <Redirect to={`/user/${this.props.userId}`}/>
        } else {
        
        return (
            <div>
                <ArtistImage>
                    <img src={this.props.show.artistList[0].imgUrl}/>
                    <inlineDiv>
                    <div>
                    {this.props.show.date}
                    </div>
                    <div>
                    {this.props.show.name}
                    </div>
                    <div>
                        <button onClick={this._deleteShow}>Delete Event</button>
                    </div>
                    </inlineDiv>
                </ArtistImage>
            </div>
        );
        }
    }
}