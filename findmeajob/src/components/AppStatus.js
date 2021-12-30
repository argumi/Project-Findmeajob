import React from 'react'
import ProfileBarUser from './ProfileBarUser'

const AppStatus = () => {
    return (
        <div>
            <ProfileBarUser />
            <section className="hero">
                <div id="application-status" className="container">
                    <div className="data-section">
                        <h1>Application Status</h1>
                        <div id="pending" className="status">
                            <div className="top-section">
                                <div className="title">
                                    <h3>Company Name</h3>
                                </div>
                                <div className="date">
                                    <p>Date Applied</p>
                                </div>
                            </div>
                            <div className="middle-section">
                                <p>Position</p>
                                <p>Salary</p>
                            </div>
                            <div className="bottom-section">
                                <p className="pending">Pending</p>
                            </div>
                        </div>
                        <div id="interview" className="status">
                            <div className="top-section">
                                <div className="title">
                                    <h3>Company Name</h3>
                                </div>
                                <div className="date">
                                    <p>Date Applied</p>
                                </div>
                            </div>
                            <div className="middle-section">
                                <p>Position</p>
                                <p>Salary</p>
                            </div>
                            <div className="bottom-section">
                                <a className="interview" href="/">Interview</a>
                            </div>
                        </div>
                        <div id="accepted" className="status">
                            <div className="top-section">
                                <div className="title">
                                    <h3>Company Name</h3>
                                </div>
                                <div className="date">
                                    <p>Date Applied</p>
                                </div>
                            </div>
                            <div className="middle-section">
                                <p>Position</p>
                                <p>Salary</p>
                            </div>
                            <div className="bottom-section">
                                <p className="accepted">Accepted</p>
                            </div>
                        </div>
                        <div id="rejected" className="status">
                            <div className="top-section">
                                <div className="title">
                                    <h3>Company Name</h3>
                                </div>
                                <div className="date">
                                    <p>Date Applied</p>
                                </div>
                            </div>
                            <div className="middle-section">
                                <p>Position</p>
                                <p>Salary</p>
                            </div>
                            <div className="bottom-section">
                                <p className="rejected">Rejected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AppStatus
