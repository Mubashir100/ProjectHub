import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actionCreator';
import { auth } from 'firebase';
class SignUp extends Component {
    state={
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        password:''
    }
    handleChange=(event)=>{
        this.state[event.target.id]=event.target.value;
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        if(this.props.auth.uid) return <Redirect to='/'/>
        if(this.props.err){
            var {message} =this.props.err;
        }
        return (
            <div className="container">
            <div className="row">
                <form className="form m8 s12 white " id="panell">
                    <h5 id="title" className="grey-text">Signup</h5>
                        <div className="input-field">
                            <label >First Name</label>
                            <input onChange={this.handleChange} id='firstName' type="text"/>
                        </div>
                        <div className="input-field">
                            <label >Last Name</label>
                            <input onChange={this.handleChange}  id='lastName' type="text"/>
                        </div>
                        <div className="input-field">
                            <label>Email</label>
                            <input onChange={this.handleChange}  id='email' type="text"/>
                        </div>
                        <div className="input-field">
                            <label >Phone no.</label>
                            <input onChange={this.handleChange}  id='phone' type="text"/>
                        </div>
                        <div className="input-field">
                            <label>password</label>
                            <input onChange={this.handleChange} id='password' type="password"/>
                        </div>
                        <button onClick={this.handleSubmit} className="black darken-1 waves-effect waves-light btn" id="loginbtn">Signup</button>
                        <p className="red-text">{message}</p>
                </form>
            </div>
  
        </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return { auth:state.firebase.auth,
    err:state.auth.authErr }
}

export default connect(mapStateToProps,{ signUp })(SignUp);
