import { combineReducers } from 'redux';
import { project } from './project'
import authReducer from './auth'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    auth:authReducer,
    projects:project,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
});