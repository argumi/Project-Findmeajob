import Axios from 'axios';
import React, { useState, useEffect, useContext } from "react";
import AuthContext from '../context/AuthProvider';
import { useAuth0 } from '@auth0/auth0-react';

const LOGIN_URL = '/auth';

const Signin = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const { setAuth } = useContext(AuthContext);
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
        //console.log(email, password);
        Axios.post("http://localhost:3001/signin", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setSigninStatus(response.data.message);

            }
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        !isAuthenticated && (
            <div>
                <section className="hero">
                    <div id="sign-in" className="container">
                        <h1>Sign In</h1>
                        <p>Enter through here and find opportunities</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" onChange={(e) =>
                                    setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" onChange={(e) =>
                                    setPassword(e.target.value)} value={password} />
                            </div>
                            <button onClick={signin}>Sign in</button>
                        </form>
                        <p>{signinStatus}</p>
                    </div>
                </section>
            </div>
        )
    )
}

export default Signin
