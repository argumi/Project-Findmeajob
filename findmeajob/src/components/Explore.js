import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';


const Explore = () => {
    const {loginWithRedirect, isAuthenticated } = useAuth0();
    const [postList, setPostList] = useState([]);
    let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:3001/explore").then((response) => {
            setPostList(response.data);

        });
    }, []);

    return (
        <div>
            <section className="hero">
                <div id="explore" className="container">
                    {postList.map((val, i) => {
                        return (
                            <div key={i} className="post" /* onClick={() => { history.push(`/posts/${val.id}`) }} */>
                                <div className="post-header">
                                    <a href="/posts">Company Name</a>
                                    <p>City Name</p>
                                </div>
                                <hr />
                                <div className="post-description">
                                    <p className="pos">{val.position}</p>
                                    <div className="job-desc">
                                        <h3>Job Description</h3>
                                        <p>{val.job_desc}</p>
                                    </div>
                                    <div className="req">
                                        <h3>Requirement</h3>
                                        <p>{val.requirement}</p>
                                    </div>

                                    <p>Rp. {val.salary}/month</p>

                                </div>
                                
                                <div className="button-area">
                                    <div className="apply-button">
                                        <a href="/apply">
                                            {isAuthenticated ? <button type="button">Apply</button>: <button onClick={() => loginWithRedirect()}>Apply</button>}
                                        </a>
                                    </div>
                                </div>
                            </div>

                        )

                    })}
                    {/* <div className="post">
                        <div className="post-header">
                            <a href="/posts">Company Name</a>
                            <p>City Name</p>
                        </div>
                        <hr />
                        <div className="post-description">
                            <p>Position</p>
                            <p>Salary</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Explore
