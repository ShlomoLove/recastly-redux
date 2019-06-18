import React from 'react';
import { connect }  from 'react-redux';

// var VideoListEntry = ({video, handleVideoListEntryTitleClick}) => (
 var VideoListEntry = ({video, changeVideo}) => ( 
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div
        className="video-list-entry-title"
        onClick={() => changeVideos(video)}
      >
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

const matchDispatchToProps = (dispatch) => {
  return {
    changeVideo: (video) => dispatch(dispatchChangeVideo(vid))
  }
}

export default VideoListEntry;
