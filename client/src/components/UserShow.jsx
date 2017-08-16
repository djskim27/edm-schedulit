import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

const DivAround = styled.div`
    display: inline-block;
    padding: 10px;
`
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const ArtistImage = styled.div`
        
    img {
        float:left;
        height: 50px;
        width: 50px;
    }

`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    button {
    background-color: rgba(102,51,153, 1); 
    border: none;
    color: white;
    padding: 12px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    border-radius: 10px;
    margin: 5px 5px
    }

    button:hover {
    background-color: rgba(102,51,153, 0.4); /* Green */
    color: white;
    }
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
            <DivAround>
            <Container>
                <ArtistImage>
                    <img src={this.props.show.artistList[0].imgUrl}/>
                   <div>
                    <div style={{color:'white'}}>
                    {this.props.show.date}
                    </div>
                    <div style={{color:'white'}}>
                    {this.props.show.name}
                    </div>
                    <ButtonDiv>
                        <button onClick={this._deleteShow}>Delete Event</button>
                    </ButtonDiv>
                    </div>
                </ArtistImage>
            </Container>
            </DivAround>
        );
        }
    }
}