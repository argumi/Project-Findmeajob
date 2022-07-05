import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Apply = () => {
    const [reasons, setReasons] = useState("");
    const [describe, setDescribe] = useState("");

    const applyPost = () => {
        Axios.post("http://localhost:3001/applypost", {
            reasons: reasons,
            describe: describe

        }).then(() => {
            alert("Post Applied");
        });

    };

    return (
        <div>
            <section className="hero">
                <div id="apply" className="container">
                    <div className="title">
                        <h1>Job Application</h1>
                    </div>
                    <div className="input-apply">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="tell-self">Tell us more about yourself!</label>
                                <textarea name="message" id="message" cols="40" rows="8"
                                    placeholder="Express yourself!" onChange={(e) => {
                                        setDescribe(e.target.value)
                                    }}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reason-apply">Reasons for applying.</label>
                                <textarea name="message" id="message" cols="40" rows="8"
                                    placeholder="Tell us why you are applying here!" onChange={(e) => {
                                        setReasons(e.target.value)
                                    }}></textarea>
                            </div>
                        </form>
                        <button type="button" onClick={applyPost} >Apply</button>
                    </div>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="left-summary">
                            <p>Applying work for</p>
                            <p>Applying work as</p>
                            <p>Salary</p>
                        </div>
                        <div className="right-summary">
                            <p>Company Name</p>
                            <p>Position</p>
                            <p>Salary</p>
                        </div>
                    </div>
                    {/* <div className="negotiate">
                        <div className="checkbox">
                            <input type="checkbox" id="negotiate-sal" name="negotiate-sal" value="Salary" />
                            <label htmlFor="negotiate-sal">Negotiate Salary</label>
                        </div>
                        <div className="negotiate-box">
                            <input type="text" id="nego-box" name="nego-box" placeholder="RP current salary" />
                        </div>
                    </div> */}
                    <div className="apply-button">
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Apply
