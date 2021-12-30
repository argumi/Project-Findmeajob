import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const CreatePost = () => {
    const [positionReq, setPositionReq] = useState("");
    const [salary, setSalary] = useState("");
    const [jobDesc, setJobDesc] = useState("");
    const [requirement, setRequirement] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/createpost", {
            positionReq: positionReq,
            salary: salary,
            jobDesc: jobDesc,
            requirement: requirement,
        }).then(() => {
            alert("Post Created");
        });

    };

    return (
        <div>
            <section className="hero">
                <div id="create-post" className="container">
                    <div className="data-section">
                        <h1>Create Job Post</h1>
                        <form action="/">
                            <div className="form-group">
                                <label htmlFor="position-required">Position Required</label>
                                <input type="text" id="position-required" name="position-required" onChange={(e) => {
                                    setPositionReq(e.target.value)
                                }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary (Rp)</label>
                                <input type="textr" id="salary" name="salary" onChange={(e) => {
                                    setSalary(e.target.value)
                                }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-desc">Job Description</label>
                                <textarea name="job-desc" id="job-desc" cols="24" rows="3" onChange={(e) => {
                                    setJobDesc(e.target.value)
                                }}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="req">Requirement</label>
                                <textarea name="req" id="req" cols="24" rows="3" onChange={(e) => {
                                    setRequirement(e.target.value)
                                }}></textarea>
                            </div>
                            <button type="button" onClick={submitPost} >Create Post</button>
                        </form>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default CreatePost
