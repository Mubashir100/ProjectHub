import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class ProjectList extends Component {
    render() {
        
        if(this.props.projects!== undefined && this.props.projects!== null){
            const p=this.props.projects.map( project => <ProjectItem project={project}/>)
            return <div>{p}</div>;
        }
        else
            return <div>No Projects to show</div>
    }
}

const mapStateToProps=(state,ownProps)=>{     
    return { projects:state.firestore.ordered.projects} ;
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'projects',orderBy:['createdAt','desc']}]))
    (ProjectList);
