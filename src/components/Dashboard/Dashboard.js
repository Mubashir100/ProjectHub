import React, { Component } from 'react'
import ProjectList from '../Project/ProjectList';
import Notice from './Notifications'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        if(!this.props.auth.uid) return <Redirect to='/login'/>
                return (
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList/>
                        </div>
                        <div className="col  s12 m4 offset-m2">    
                            <Notice/>
                        </div>
                    </div>
                )
        }
}

const mapStateToProps= state =>{
    //console.log('firebase::',state.firebase);
    return { auth: state.firebase.auth,
            profile:state.firebase.profile
             };
}
export default connect(mapStateToProps)(Dashboard);
