import React, { Component } from 'react';
import axios from 'axios';
import EventList from './EventList'


class Homepage extends Component {
    render(){
        return(
            <div>
                Hello from Homepage
                <EventList />
            </div>
        )
    }
}

export default Homepage