import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
      inputValue: ""
      }
    }

    handleChange (){
      this.setState({inputValue: event.target.value});
    }


      render() {
      const inputValue = this.state.inputValue;
      const filteredArtists = this.props.artists.filter(artist =>
      artist.name.match(inputValue));

        return (
          <div>
            <FilterInput handleChange={this.handleChange}/>
            <Artists artists={filteredArtists} />
          </div>
        )
      }
  }
