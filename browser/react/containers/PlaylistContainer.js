import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Artists from '../components/Artists';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';



export default class PlaylistContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      inputValue: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (evt) {
      // console.log("A name was submitted: " + this.state.inputValue)
      evt.preventDefault();
      // this.setState({inputValue: ''});

      const addPlayList = this.props.addPlayList;
      console.log("~~~~~~", this.props.addPlayList);
      addPlayList(this.state.inputValue);
    }

    handleChange (evt) {
      this.setState({inputValue: evt.target.value});
    }
    
    render() {
      const inputValue = this.state.inputValue;
      const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));
        return (
          <div>
            <NewPlaylist 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              inputValue={this.state.inputValue}/>
          </div>
        )
     }
  }



