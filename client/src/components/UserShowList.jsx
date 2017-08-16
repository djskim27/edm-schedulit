import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import UserShow from './UserShow'

const ShowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const ListContainer = styled.div`
    width: 600px;
    background: rgba(22,179,225,0.3)
`
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
            <ShowContainer>
                <ListContainer>
                <h1 style={{color:'white', textAlign:'center'}}>{this.props.username}'s Show Schedule</h1>
                {showComponent}
                </ListContainer>
            </ShowContainer>
        );
        
    }
}

export default UserShowList