import React, { Component } from 'react';
import { signIn } from '../../store/actionCreator';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
 class Login extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(event)=>{
        this.state[event.target.id]=event.target.value;
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        
        this.props.signIn(this.state);
    }
    render() {
            if(this.props.auth.uid) return <Redirect to='/'/>
            return(
                <div className="container">
                    <div className="row">
                        <form className="s12  z-depth-0 white" id="panell">
                            <h5 id="title" className="grey-text">Login</h5>
                                <div className="input-field">
                                    <label >Email</label>
                                    <input  onChange={this.handleChange} id='email' type="text"/>
                                </div>
                                <div className="input-field">
                                    <label>Password</label>
                                    <input onChange={this.handleChange} id='password' type="password"/>
                                </div>
                                <button onClick={this.handleSubmit} className="black darken-1 waves-effect waves-light btn" id="loginbtn">Login</button>
                                <p className="red-text">{this.props.error}</p>
                        </form>
                    </div>
                </div>
            );
    }
}
const mapStateToProps =(state)=>{
   return {
        error:state.auth.authErr,
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps,{ signIn })(Login)