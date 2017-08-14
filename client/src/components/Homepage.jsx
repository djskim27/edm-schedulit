import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
           
            this.setState({shows: res.data});
            
        })
    }


    render(){
        return(
            <div>
                <ShowList shows = {this.state.shows}/>
            </div>
        )
    }
}

export default Homepage