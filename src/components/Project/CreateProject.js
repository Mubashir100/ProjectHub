import React, { Component } from 'react';
import { createProject } from '../../store/actionCreator'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';



class CreateProject extends Component {
    state={
        title:'',
        detail:''
    }
    handleChange=(event)=>{
        this.state[event.target.id]=event.target.value;
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state,this.props.profile);
        this.props.history.push('/');
        
    }
    render() {
        if(!this.props.auth.uid) return <Redirect to='/login'/>
        return (
            <div>
               <div className="container">
                <div className="row white">
                    <form onSubmit={this.handleSubmit} className="form">
                        <h5 id="title" className="grey-text">Enter the Project Details</h5>
                            <div className="input-field">
                                <label >Project Title</label>
                                <input onChange={this.handleChange} id='title'  type="text"/>
                            </div>
                            <div className="input-field">
                                <label>Project Details</label>
                                <textarea onChange={this.handleChange} id='detail' type="text" className="materialize-textarea"/>
                            </div>
                            <button onSubmit={this.handleSubmit} className="black darken-1 waves-effect waves-light btn" id="loginbtn">Create</button>
                        
                    </form>
                </div>
            </div>
            </div>
        )
        
        
    }
}

const mapStateToProps = (state)=>{
    return { auth:state.firebase.auth,
        profile:state.firebase.profile };
}

export default connect(mapStateToProps,{ createProject })(CreateProject)
