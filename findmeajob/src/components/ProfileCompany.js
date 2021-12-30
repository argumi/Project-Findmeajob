import React from 'react'
import ProfileBarCompany from './ProfileBarCompany'

const ProfileCompany = () => {
    return (
        <div>
        <ProfileBarCompany />
            <section className="hero">
                <div id="profile-company" className="container">
                    <div className="data-section">
                        <h1>Company Profile</h1>
                        <form action="/">
                            <div className="form-group">
                                <label htmlFor="comp-name">Company Name</label>
                                <input type="text" id="comp-name" name="comp-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comp-email">Company Email</label>
                                <input type="email" id="comp-email" name="comp-email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comp-work-field">Company Work Field</label>
                                <input type="text" id="comp-work-field" name="comp-work-field" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comp-phone">Company Phone Number</label>
                                <input type="number" id="comp-phone" name="comp-phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="comp-address">Company Current Address</label>
                                <textarea name="comp-address" id="comp-address" cols="24" rows="2"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comp-desc">Company Description</label>
                                <textarea name="comp-desc" id="comp-desc" cols="24" rows="3"></textarea>
                            </div>
                            <input type="submit" className="save-data-cta" value="Save Data" />
                        </form>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProfileCompany
