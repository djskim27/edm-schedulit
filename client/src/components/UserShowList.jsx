import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import UserShow from './UserShow'


class UserShowList extends Component {
    

  
  
    render() {
        const userId = this.props.userId
        const shows = this.props.shows;
        const orderedDates = shows.sort(function(a,b){
 
            return new Date(a.date) - new Date(b.date);

            });
     

         const showComponent = orderedDates.map((show, i) => {
    
            return(
                <UserShow show={show} userId={userId} key={i}/>
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