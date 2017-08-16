import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class YouTube extends Component {
    render() {
    return(
        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="400px"
        height="400px"
        display="initial"
        position="relative"
        allowFullScreen/>
    )
    
    

    }
}