import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';

var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
