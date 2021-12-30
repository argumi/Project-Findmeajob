import Axios from 'axios';
import React, { useState, useEffect } from "react";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signinStatus, setSigninStatus] = useState("");
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/signin").then((response) => {
            if (response.data.loggedIn === true) {
                setSigninStatus(response.data.message);
            }
        });
    }, []);

    const signin = () => {
        Axios.post("http://localhost:3001/signin", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setSigninStatus(response.data.message);

            }
        });
    };


    return (
        <div>
            <section className="hero">
                <div id="sign-in" className="container">
                    <h1>Sign In</h1>
                    <p>Enter through here, whether you are a company, <br />or a person looking for a job!</p>
                    <form action="/profileuser">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        </div>
                        <button type="button" onClick={signin}>Sign in</button>
                    </form>
                    <p>{signinStatus}</p>
                </div>
            </section>
        </div>
    )
}

export default Signin
