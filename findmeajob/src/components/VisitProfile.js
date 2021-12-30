import React from 'react'

const VisitProfile = () => {
    return (
        <div>
            <section className="hero">
                <div id="visit-profile" className="container">
                    <div className="top-profile">
                        <div className="data-section">
                            <div className="top-section">
                                <h3>Profile</h3>
                                <a href="/">
                                    <button type="button">CV</button>
                                </a>
                            </div>
                            <hr />
                            <div className="profile-data">
                                <div className="left-section">
                                    <div className="label">
                                        <p>Full Name</p>
                                        <p className="data">Aji Rangga Gumiwang</p>
                                    </div>
                                    <div className="label">
                                        <p>Date of Birth</p>
                                        <p className="data">April 22, 1999</p>
                                    </div>
                                    <div className="label">
                                        <p>Gender</p>
                                        <p className="data">#</p>
                                    </div>
                                </div>
                                <div className="right-section">
                                    <div className="label">
                                        <p>Phone Number</p>
                                        <p className="data">#</p>
                                    </div>
                                    <div className="label">
                                        <p>Skills</p>
                                        <p className="data">#</p>
                                    </div>
                                    <div className="label">
                                        <p>Current Address</p>
                                        <p className="data">#</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bot-profile">
                        <div id="education" className="data-section">
                            <div className="top-section">
                                <h3>Education</h3>
                            </div>
                            <hr />
                            <div className="left-section">
                                <div className="label">
                                    <p>Educational Level</p>
                                    <p className="data">S1</p>
                                </div>
                                <div className="label">
                                    <p>Graduation Year</p>
                                    <p className="data">#</p>
                                </div>
                                <div className="label">
                                    <p>Name of Institution</p>
                                    <p className="data">#</p>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="label">
                                    <p>Major</p>
                                    <p className="data">Fakultas Ilmu Komputer</p>
                                </div>
                                <div className="label">
                                    <p>GPA</p>
                                    <p className="data">#</p>
                                </div>
                            </div>
                        </div>
                        <div id="experience" className="data-section">
                            <div className="top-section">
                                <h3>Experience</h3>
                            </div>
                            <hr />
                            <div className="left-section">
                                <div className="label">
                                    <p>Company Name</p>
                                    <p className="data">PT Kerja Terikat</p>
                                </div>
                                <div className="label">
                                    <p>Business Field</p>
                                    <p className="data">#</p>
                                </div>
                                <div className="label">
                                    <p>Length of Work</p>
                                    <p className="data">1 - 2 Years</p>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="label">
                                    <p>Last Position</p>
                                    <p className="data">#</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-section">
                        <div className="top-buttons">
                            <div className="accept-button">
                                <a href="/">
                                    <button className="accept" type="button">Accept</button>
                                </a>
                            </div>
                            <div className="reject-button">
                                <a href="/">
                                    <button className="reject" type="button">Reject</button>
                                </a>
                            </div>
                        </div>
                        <div className="bot-button">
                            <div className="back-button">
                                <a href="/applist">
                                    <button className="back" type="button">Back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VisitProfile
