import React from 'react'
import ProfileBarUser from './ProfileBarUser'

const Experience = () => {
    return (
        <div>
            <ProfileBarUser />
            <section className="hero">
                <div id="experience" className="container">
                    <div className="data-section">
                        <h1>Experience</h1>
                        <form action="index.html">
                            <div className="form-group">
                                <label htmlFor="comp-name">Company Name</label>
                                <input type="text" id="comp-name" name="comp-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="buss-field">Business Field</label>
                                <input type="text" id="buss-field" name="buss-field" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="length-of-work">Length of Work</label>
                                <input list="length" id="length-of-work" name="length-of-work" />
                                <datalist id="length">
                                    <option value="Less than 6 months" />
                                    <option value="6 - 12 months" />
                                    <option value="1 - 2 years" />
                                    <option value="2 - 5 years" />
                                    <option value="5 - 10 years" />
                                    <option value="More than 10 years" />
                                </datalist>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last-pos">Last Position</label>
                                <input type="text" id="last-pos" name="last-pos" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job-desc">Job Description</label>
                                <textarea name="message" id="message" cols="24" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reasons-resign">Reasons for Resigning</label>
                                <textarea name="message" id="message" cols="24" rows="3"></textarea>
                            </div>
                            <input type="submit" className="save-data-cta" value="Save Data" />
                        </form>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Experience
