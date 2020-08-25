import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducers/reducers'
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';

const store = createStore(reducer,compose( 
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig) // redux bindings for firestore
    ));

const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true // this to enable realtime sync and allow create collections
    }
const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance,
    
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div></div>;
        return children
}
    
    

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded><App /></AuthIsLoaded>
            
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
 
