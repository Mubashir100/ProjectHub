import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actionCreator'
import { connect } from 'react-redux'
const SignInLink = (props)=>{
    return(
        <div>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/create/project">Create Project</Link></li>
                <li><Link onClick={props.signOut}>Sign Out</Link></li>
        </div>
    );
}
export default connect(null,{ signOut })(SignInLink);