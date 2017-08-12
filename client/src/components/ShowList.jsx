import React, { Component } from 'react';
import Show from './Show'

class ShowList extends Component {
    
    render(){
        const shows = this.props.shows;
        const showComponent = shows.map((show, i) => {
           return <Show show = {show}/>;
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