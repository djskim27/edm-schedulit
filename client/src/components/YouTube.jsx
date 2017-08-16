import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class YouTube extends Component {
    render() {
    return(
        <Iframe url={this.props.youtube}
        width="400px"
        height="400px"
        display="initial"
        position="relative"
        allowFullScreen/>
    )
    
    

    }
}