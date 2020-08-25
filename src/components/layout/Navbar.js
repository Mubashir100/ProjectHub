import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';
import M from  'materialize-css/dist/js/materialize.min.js';


class Navbar extends Component{
 
componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems,{});
}
render(){
    const link=this.props.isSignedIn?<SignInLink/>:<SignOutLink/>
        return(
            <div>
                <nav className="nav-wrapper black darken-1">
                    <div className="container">
                        <Link to="/" className="brand-logo">ProjectHub</Link>
                        <a href="#" class="sidenav-trigger left" data-target="mobile-nav">
                            <i className="material-icons">menu </i>
                        </a>
                        <ul  className="right hide-on-med-and-down">    
                            {link}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-nav">
                    {link}
                </ul>
            </div>
        )
}

    
}
const mapStateToProps = ( state )=>{
    return { 
        isSignedIn:state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Navbar);