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
            this.setState({shows: res.data});
            console.log(this.state.shows);
        })
    }


    render(){
        return(
            <div>
                Hello from Homepage
                <ShowList shows = {this.state.shows}/>
            </div>
        )
    }
}

export default Homepage