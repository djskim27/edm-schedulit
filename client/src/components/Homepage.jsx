import React, { Component } from 'react';
import axios from 'axios';
import ShowList from './ShowList'


class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            users:"",
            shows:[]
        }
    }

    componentWillMount(){
        axios.get('/api/shows').then(res => {
            console.log(res.data);
        })
    }


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