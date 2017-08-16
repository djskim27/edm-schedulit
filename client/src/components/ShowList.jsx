import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Show from './Show';


const Logo = styled.img`
width: 300px;
height: 100px;
`
const ArtistImage = styled.div`
        text-align: center;
    img {
        height: 250px;
        width: 250px;
    }

    img:hover {
        opacity: 0.5;
    }

`
const inlineDiv = styled.div`
background-color: rgba(102,51,153, 0.4);
`

class ShowList extends Component {
    
    render(){
        const shows = this.props.shows;

        const orderedDates = shows.sort(function(a,b){
 
            return new Date(a.date) - new Date(b.date);

            });

        
        const showComponent = orderedDates.map((show, i) => {
    
            return(
                <div key={i} style={{display: 'inline-block', padding:'10px'}}>
                    
                    <ArtistImage >
                        <inlineDiv>
                            <p style={{color:'white'}}>{show.stringDate} / {show.name} / {show.city}</p>
                        </inlineDiv>
                        <Link to={`/show/${show._id}`}>
                        <img src={show.artistList[0].imgUrl} />
                        </Link>
                    </ArtistImage>

                </div>
            )
        })



        return(
            <div>
                <Logo src='http://i.imgur.com/RCMqcno.png'/>
                <br/>
                {showComponent}
                
            </div>
        )
    }
}

export default ShowList