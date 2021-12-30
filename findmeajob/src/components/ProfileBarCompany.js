import React from 'react'
import { Link } from 'react-router-dom'

const ProfileBarCompany = () => {
    return (
        <div>
            <div id="profile-bar-company" className="profile-bar">
                <div className="container">
                    <ul className="bar">
                        <li><Link to="/profilecompany" className="current-1">Profile</Link></li>
                        <li><Link to="/changepasswordcompany" className="current-2">Change Password</Link></li>
                        <li><Link to="/createpost" className="current-3">Create Post</Link></li>
                    </ul>
                    <ul className="bot-bar">
                        <li><Link to="/jobposts" className="current-4">Job Posts</Link></li>
                        <li><Link to="/" className="current-5">Sign Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileBarCompany
