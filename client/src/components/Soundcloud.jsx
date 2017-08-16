import Player from 'react-soundcloud-player'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

export default class Soundcloud extends Component {
    render () {
    return (
      <div>
        <Player audio_id='193179003' title='Easyfun - Fanta' />
      </div>
    )
  }
}

