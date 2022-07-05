import axios from 'axios';
import Axios from 'axios';
import React, { useState } from 'react'

const REGISTER_URL = '/register';

const Register = () => {
    const [fullNameReg, setFullNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            fullname: fullNameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ fullname: fullNameReg, email: emailReg, password: passwordReg }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);

        } catch (err) {

        }
    }
    return (
        <div>
            <section className="hero">
                <div id="register" className="container">
                    <h1>Register</h1>
                    <p>Register an account so you can sign in!</p>
                    <form action="/signin" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" id="full-name" name="full-name" onChange={(e) => {
                                setFullNameReg(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={(e) => {
                                setEmailReg(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }} />
                        </div>
                        <button type="button" onClick={register}>Register</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register
