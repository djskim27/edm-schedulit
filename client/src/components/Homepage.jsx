import React, { Component } from 'react';
import axios from 'axios';
import ShowList from './ShowList'


class Homepage extends Component {
    
    render(){
        return(
            <div>
                Hello from Homepage
                <ShowList />
            </div>
        )
    }
}

export default Homepage