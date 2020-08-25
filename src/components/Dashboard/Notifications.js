import React, { Component } from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux'
import moment from 'moment'

class Notifications extends Component {
    render() {
        const { notifications }=this.props;
        return (
            <div className="section">
                <div className="card grey lighten-3 z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notification">
                            {notifications && notifications.map(item=>{
                                return(
                                    <li key={item.id}>
                                        <span className="blue-text">{item.user}  </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text note-date"> {moment(item.time.toDate()).fromNow()}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=state=>{
     return { notifications:state.firestore.ordered.notifications }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect( [{collection:'notifications',limit:3,orderBy:['time','desc']}])
    )(Notifications)
    
