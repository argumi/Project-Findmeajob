import Axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [fullNameReg, setFullNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [dobReg, setDobReg] = useState({ var: new Date() })
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            fullname: fullNameReg,
            email: emailReg,
            password: passwordReg,
            dob: dobReg,
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <div>
            <section className="hero">
                <div id="register" className="container">
                    <h1>Register</h1>
                    <p>Register an account, as a company,  so you can sign in!</p>
                    <form action="/signin">
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
                        <div className="from-group">
                            <label htmlFor="date-birth">Date of Birth</label>
                            <input type="date" id="date-birth" name="date-birth" onChange={(e) => {
                                setDobReg(e.target.value);
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
