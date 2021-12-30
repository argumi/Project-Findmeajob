import React from 'react'

const AppList = () => {
    return (
        <div>
            <section className="hero">
                <div id="applicants-list" className="container">
                    <div className="data-section">
                        <h1>Applicants List</h1>
                        <div className="applicants">
                            <div className="applicant">
                                <div className="top-section">
                                    <h3>Applicant Name</h3>
                                    <a className="profile-button" href="/visitprofile">Profile</a>
                                </div>
                                <div className="bottom-section">
                                    <a href="/">
                                        <button type="button">Accept</button>
                                    </a>
                                </div>
                            </div>
                            <div className="applicant">
                                <div className="top-section">
                                    <h3>Applicant Name</h3>
                                    <a className="profile-button" href="/visitprofile">Profile</a>
                                </div>
                                <div className="bottom-section">
                                    <a href="/">
                                        <button type="button">Accept</button>
                                    </a>
                                </div>
                            </div>
                            <div className="applicant">
                                <div className="top-section">
                                    <h3>Applicant Name</h3>
                                    <a className="profile-button" href="/visitprofile">Profile</a>
                                </div>
                                <div className="bottom-section">
                                    <a href="/">
                                        <button type="button">Accept</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="back-button">
                            <a href="/jobposts">
                                <button type="button">Back</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AppList
