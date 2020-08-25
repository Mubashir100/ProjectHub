import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from  'react-redux-firebase' 
import { Redirect } from 'react-router-dom';
import moment from 'moment'
class ProjectDetails extends Component {
    render() {
        if(!this.props.auth.uid) return <Redirect to='/login'/>
        console.log(this.props)
        if(this.props.project)
        {
            const {project}=this.props;
            return (
            <div className="container">
                <div className="card z-depth-0 grey lighten-3">
                <h4 >{project.title}</h4>
                <p>{project.detail}</p>
                <footer className=" blue-text">
                    <span>By: {project.createdBy}</span>
                    <span>{moment(project.createdAt.toDate()).calendar()}</span>
                </footer>
                </div>
                
            </div>
        )}
        else return <div>Loading</div>
    }
}

const mapStateToProps = (state,ownProps)=>{

    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects;
    const project=projects?projects[id]:null;
    console.log(project);
    return {auth:state.firebase.auth
        ,project }

}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(()=>['projects'])
)(ProjectDetails);
