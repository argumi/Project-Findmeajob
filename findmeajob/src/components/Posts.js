import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Axios from "axios"
const Posts = () => {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    useEffect(() => {
        Axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            /* setPostList(response.data); */
            console.log(response)

        });
    });

    return (
        <div>
            <div>{id}</div>
            <section className="hero">
                <div>{id}</div>
                <div id="single-post" className="container">
                    <div className="description">
                        <div className="title-desc">
                            <h1>Company Name{id}</h1>
                            <div className="desc-top">
                                <p>{postObject.position}</p>
                                <p>City Name</p>
                                <p className="salary">Salary</p>
                            </div>
                        </div>
                        <div className="button-area">
                            <div className="apply-button">
                                <a href="/apply">
                                    <button type="button">Apply</button>
                                </a>
                            </div>
                            <div className="dates">
                                <p>Date Created</p>
                                <p>Date Ending</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-group">
                        <div className="job-desc">
                            <h3>Job Description</h3>
                            <ul className="desc">
                                <li>1. Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                                <li>2. Sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua</li>
                                <li>3. Ut enim ad minim veniam quis nostrud exercitation ullamco</li>
                                <li>4. Laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li>5. Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            </ul>

                            <hr />
                        </div>
                        <div className="req">
                            <h3>Requirement</h3>
                            <ul className="desc">
                                <li>1. Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                                <li>2. Sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua</li>
                                <li>3. Ut enim ad minim veniam quis nostrud exercitation ullamco</li>
                                <li>4. Laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li>5. Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            </ul>

                            <hr />
                        </div>
                        <div className="comp-desc">
                            <h3>Company Description</h3>
                            <ul className="desc">
                                <li>1. Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                                <li>2. Sed do eiusmod tempor incididunt Ut labore et dolore magna aliqua</li>
                                <li>3. Ut enim ad minim veniam quis nostrud exercitation ullamco</li>
                                <li>4. Laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li>5. Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Posts
