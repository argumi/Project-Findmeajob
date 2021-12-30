import React from 'react'
import ProfileBarUser from './ProfileBarUser'

const ProfileUser = () => {
    return (
        <>

            <ProfileBarUser />
            <section className="hero">
                <div id="profile" className="container">
                    <div className="data-section">
                        <h1>Profile</h1>
                        <form action="index.html">
                            <div className="form-group">
                                <label htmlFor="full-name">Full Name</label>
                                <input type="text" id="full-name" name="full-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <input type="date" id="date-of-birth" name="date-of-birth" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" id="phone" name="phone" />
                            </div>
                            <div className="form-group-g">
                                <label htmlFor="gender">Gender</label>
                                <input type="radio" id="male" name="gender" value="Male" />
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="female" name="gender" value="Female" />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skills">Skills</label>
                                <input type="text" id="skills" name="skills" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Current Address</label>
                                <input type="text" id="address" name="address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cv">Upload CV</label>
                                <input type="file" className="upload" id="cv" name="cv" />
                            </div>
                            <input type="submit" className="save-data-cta" value="Save Data" />
                        </form>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ProfileUser
