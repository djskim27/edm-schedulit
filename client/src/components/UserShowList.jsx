import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
class UserShowList extends Component {


  
    render() {
        const shows = this.props.shows;
        const orderedDates = shows.sort(function(a,b){
 
            return new Date(a.date) - new Date(b.date);

            });
     

         const showComponent = orderedDates.map((show, i) => {
    
            return(
                <ArtistImage key={i}>
                    <img src={show.artistList[0].imgUrl}/>
                    <inlineDiv>
                    <div>
                    {show.date}
                    </div>
                    <div>
                    {show.name}
                    </div>
                    </inlineDiv>
                </ArtistImage>
            )
        })

        return (
            <div>
                {showComponent}
            </div>
        );
    }
}

export default UserShowList