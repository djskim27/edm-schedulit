import React, { Component } from 'react';
import Event from './Event'

class EventList extends Component {
    render(){
        return(
            <div>
                Hello from EventList
                <Event />
            </div>
        )
    }
}

export default EventList