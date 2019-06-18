import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var SearchContainer = () => {};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


const mapStateToProps = ( state ) => {
  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList,
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {dispatch(handleSearchChange(q))},
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
