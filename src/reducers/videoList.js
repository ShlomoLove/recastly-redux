import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if (action.tupe === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state; 
  }
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
