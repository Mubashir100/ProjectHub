

export const createProject=(project,profile)=>{
    return (dispatch,getState,{getFirebase,getFirestore} )=>{
        const store=getFirestore();
        store.collection('projects').add({
            ...project,
            createdBy:profile.firstName+' '+profile.lastName,
            createdAt:new Date(),
        });
    
    dispatch({type:'CREATE_PROJECT',payload:project});
    
    }
}

export const signIn= (credentials) =>{
    return (dispatch,getState,{getFirebase}) =>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
        .then(()=>dispatch({type:'LOGIN_SUCCESS'}))
        .catch((err)=>dispatch({type:'LOGIN_FAILED',err}));
    }
}

export const signOut = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>dispatch({type:'LOGOUT_SUCCESSFULL'}));
    }
}

export const signUp =(newUser)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
            .then((resp)=>{
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName:newUser.firstName,
                    lastName:newUser.lastName,
                    initials:newUser.firstName[0]+newUser.lastName[0]
                });
            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            }).catch(err=>{
                dispatch({type:'SIGNUP_FAILED',err})
            });
    }
}
