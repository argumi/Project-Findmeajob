import React from 'react'
import ProfileBarUser from './ProfileBarUser'

const ChangePasswordUser = () => {
    return (
        <div>
            <ProfileBarUser />
            <section className="hero">
                <div id="change-password" className="container">
                    <div className="data-section">
                        <h1>Change Password</h1>
                        <form action="index.html">
                            <div className="form-group">
                                <label htmlFor="current-pass">Enter Current <br />Password</label>
                                <input type="password" id="current-pass" name="current-pass" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="new-pass">Enter New Password</label>
                                <input type="password" id="mew-pass" name="New-pass" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="conf-new-pass">Reenter New <br />Password</label>
                                <input type="password" id="conf-new-pass" name="conf-new-pass" />
                            </div>
                            <input type="submit" id="change-pass" className="change-pass-cta" value="Change Password" />
                        </form>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default ChangePasswordUser
