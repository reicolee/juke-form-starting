import React, { Component } from 'react';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input onChange = {props.handleChange}
        className="form-control"
        placeholder="Enter artist name"
      />
    </form>
  );
}

export default FilterInput;
