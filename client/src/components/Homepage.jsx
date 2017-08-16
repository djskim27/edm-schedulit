import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ShowList from './ShowList';
import styled from 'styled-components';


const Container = styled.div`
        margin-top: 50px;
        text-align: center;
        width: 
    }
  `  

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            shows: [],
            user: [],



        }
    }

    componentWillMount() {
        if (this.props.match.params.userId) {
            axios.get(`/api/user/${this.props.match.params.userId}`).then((res) => {
                console.log(res.data);
                this.setState({ user: res.data });
                console.log(this.state.user)
                this.props.setLoggedInUser(res.data);


            })
        }
        axios.get('/api/shows').then(res => {

            this.setState({ shows: res.data });

        });

        axios.get('/api/user').then((res) => {
            console.log(res.data);
            this.props.updateUsers(res.data);
            
        })






    }


    render() {
        return (
           
            <Container>
                <ShowList shows={this.state.shows} />
            </Container>
           
        )
    }
}

export default Homepage