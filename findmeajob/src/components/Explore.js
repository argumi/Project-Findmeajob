import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom";

const Explore = () => {
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
                                    <p >{val.position}</p>
                                    <p>{val.salary}</p>
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
