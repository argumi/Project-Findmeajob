import React from 'react'
import ProfileBarCompany from './ProfileBarCompany'

const JobPosts = () => {
    return (
        <div>
            <ProfileBarCompany />
            <section className="hero">
                <div id="job-posts" className="container">
                    <div className="data-section">
                        <h1>Job Posts</h1>
                        <div className="status">
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
                                <div className="edit-button">
                                    <a href="/">
                                        <button>Edit</button>
                                    </a>
                                </div>
                                <div className="delete-button">
                                    <a href="/">
                                        <button>Delete</button>
                                    </a>
                                </div>
                                <div className="app-list-button">
                                    <a href="/applist">
                                        <button type="button">Applicants List</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="status">
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
                                <div className="edit-button">
                                    <a href="/">
                                        <button>Edit</button>
                                    </a>
                                </div>
                                <div className="delete-button">
                                    <a href="/">
                                        <button>Delete</button>
                                    </a>
                                </div>
                                <div className="app-list-button">
                                    <a href="/applist">
                                        <button>Applicants List</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default JobPosts
