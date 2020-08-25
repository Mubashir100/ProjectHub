const initState = {
    authErr:null
}
const auth = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('loginned');
            return{ 
                ...state,
                authErr:null
            }
        case 'LOGIN_FAILED':
            console.log('login failed')
            return{
                ...state,
                authErr:"Login Failed:Email/Password is incorrect!!"
            }
        case 'LOGOUT_SUCCESSFULL':
            console.log('logging out');
            return{ 
                ...state,
                authErr:null
            }
        case 'SIGNUP_SUCCESS':
            console.log('sign up successfull');
            return {
                ...state,
                authErr:null
            }
        case 'SIGNUP_FAILED':
            console.log(action.err);
            return {
                ...state,
                authErr:action.err
            }
        default:
            return state;

    }
}
export default auth;