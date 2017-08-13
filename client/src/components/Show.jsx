import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
`

const ArtistImage = styled.div`
  
    img {
        height: 250px;
        width: 250px;
    }

`

class Show extends Component {
    constructor(){
        super();
        this.state = {
            id: "",
            name: '',
            city: '',
            state: '',
            venue: '',
            eventPage: '',
            artistList: []
            
        }
    }

    componentWillMount(){
        const id = this.props.match.params.showId;
        axios.get(`/api/show/${id}`).then((res) => {
            console.log(res.data)
            this.setState({
                id: res.data._id

            });
        })
    }


    render(){
        
   
        return(
            <div>
                Hello World
            </div>
        )
    }
}

export default Show
