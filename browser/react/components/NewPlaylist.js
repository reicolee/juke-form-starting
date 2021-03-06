import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, Link } from 'react-router';


const NewPlaylist = function (props) {


return (
<div className="well">
  <form className="form-horizontal" onSubmit = {props.handleSubmit} >
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" value = {props.inputValue} onChange = {props.handleChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" disabled={!props.inputValue || props.inputValue.length > 16} className="btn btn-success">Create Playlist</button>
          {!props.inputValue.length && <div className="alert alert-warning">Please enter a name</div>}
          {props.inputValue.length > 16 && <div className="alert alert-warning">Name cannot be longer than 16 characters</div>}
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlaylist 