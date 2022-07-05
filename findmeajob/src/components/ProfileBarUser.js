import React from 'react'
import {Link} from 'react-router-dom'

const ProfileBarUser = () => {
    return (
        <div>
            <div id="profile-bar" className="profile-bar">
                <div className="container">
                    <ul className="bar">
                        <li><Link to="/profile" className="current-1" >Profile</Link></li>
                        {/* <li><Link to="/education" className="current-2" >Education</Link></li>
                        <li><Link to="/experience" className="current-3">Experience</Link></li> */}
                    </ul>
                    <ul className="bot-bar">
                        {/* <li><Link to="/changepassworduser" className="current-4" >Change Password</Link></li> */}
                        <li><Link to="/appstatus" className="current-5" >Application Status</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileBarUser
