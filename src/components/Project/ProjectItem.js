import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'


function ProjectItem(props) {
    console.log("insidr project item",props)
    return (
                <Link to={`/projects/${props.project.id}`}>
                    <div  className="card grey lighten-3 black-text z-depth-0">
                        <h4 style={{fontWeight:'bold',fontSize:'35px'}} class="card-title">{props.project.title}</h4>
                        <p className="blue-text">By {props.project.createdBy}</p>
                        <div className="blue-text"   >{moment(props.project.createdAt.toDate()).calendar()}</div>
                    </div>
                </Link>
    )
}

export default ProjectItem
