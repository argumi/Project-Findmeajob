import Axios from 'axios';
import React, { useState } from 'react'
const CompanyRegister = () => {
    const [companyNameReg, setCompanyNameReg] = useState("");
    const [companyEmailReg, setCompanyEmailReg] = useState("");
    const [companyPasswordReg, setCompanyPasswordReg] = useState("");
    const companyregister = () => {
        Axios.post("http://localhost:3001/companyregister", {
            companyname: companyNameReg,
            companyemail: companyEmailReg,
            companypassword: companyPasswordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <section className="hero">
                <div id="company-registration" className="container">
                    <h1>Company Registration</h1>
                    <p>Register an account, as a company, so you can sign in!</p>

                    <form action="/profilecompany">
                        <div className="form-group">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" id="company-name" name="company-name" onChange={(e) => {
                                setCompanyNameReg(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company-email">Company Email</label>
                            <input type="email" id="company-email" name="company-email" onChange={(e) => {
                                setCompanyEmailReg(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => {
                                setCompanyPasswordReg(e.target.value);
                            }} />
                        </div>
                        <button type="button" onClick={companyregister}>Register</button>

                        <div className="button-area">
                            <p>Click here if you already have an account</p>
                            <a href="/companysignin">
                                <button type="button">Sign In</button>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CompanyRegister
