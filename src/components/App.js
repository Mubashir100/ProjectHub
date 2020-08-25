import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import CreateProject from './Project/CreateProject';
import Login from './auth/Login';
import Signup from './auth/SignUp';
import Dashboard from './Dashboard/Dashboard'
import ProjectDetail from './Project/ProjectDetails'

class App extends Component{
    render(){
        return( 
            <div>
            <Router>
                <Navbar/>
                <div className="container">     
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route path="/create/project" component={CreateProject}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        <Route path="/projects/:id" component={ProjectDetail}></Route>
                </div>
            </Router>
        </div>
        );
    }
}
export default App;