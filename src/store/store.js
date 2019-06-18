import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';


const store = createStore(rootReducer, {currentVideo: null, videoList: []}, applyMiddleware(thunk));
// TODO:  Create your redux store, apply thunk as a middleware, and export it!

export default store; 
