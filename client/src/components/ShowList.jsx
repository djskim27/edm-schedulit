import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Show from './Show';



const ArtistImage = styled.div`
        text-align: center;
    img {
        height: 250px;
        width: 250px;
    }

`


class ShowList extends Component {
    
    render(){
        const shows = this.props.shows;

        const orderedDates = shows.sort(function(a,b){
 
            return new Date(a.date) - new Date(b.date);

            });

        
        const showComponent = orderedDates.map((show, i) => {
    
            return(
                <div key={i}>
                    
                    <ArtistImage >
                        <div>
                            {show.name}
                        </div>
                        <div>
                            {show.date}
                        </div>
                        <Link to={`/show/${show._id}`}>
                        <img src={show.artistList[0].imgUrl} />
                        </Link>
                      
                    </ArtistImage>
                </div>
            )
        })



        return(
            <div>
                <h1>EDM Shows</h1>
                {showComponent}
                
            </div>
        )
    }
}

export default ShowList