import React from 'react'
import ProfileBarUser from './ProfileBarUser'

const Education = () => {
    return (
        <div>
            <ProfileBarUser />
            <section className="hero">
                <div id="education" className="container">
                    <div className="data-section">
                        <h1>Education</h1>
                        <form action="index.html">
                            <div className="form-group">
                                <label htmlFor="edu-level">Educational Level</label>
                                <input list="level" id="edu-level" name="edu-level" />
                                <datalist id="level">
                                    <option value="SD" />
                                    <option value="SMP" />
                                    <option value="SMA" />
                                    <option value="D3" />
                                    <option value="D4" />
                                    <option value="S1" />
                                    <option value="S2" />
                                    <option value="S3" />
                                </datalist>
                            </div>
                            <div className="form-group">
                                <label htmlFor="major">Major</label>
                                <input type="text" id="major" name="major" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="grad-year">Graduation Year</label>
                                <input type="number" id="grad-year" name="grad-year" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gpa">GPA</label>
                                <input type="number" id="gpa" name="gpa" step=".01" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="institution">Name of Institution</label>
                                <input type="text" id="institution" name="institution" />
                            </div>

                            <input type="submit" className="save-data-cta" value="Save Data" />
                        </form>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Education
