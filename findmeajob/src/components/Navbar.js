import menu from './menu.svg'
import { ReactSVG } from 'react-svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = (props) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const [navToggle, setNavToggle] = React.useState(false);
    return (

        <div className="navbar">

            <div className="container">
                <Link to="/home" className="logo">Findmea<span>Job</span></Link>
                <ReactSVG id="mobile-cta" className="mobile-menu" src={menu} onClick={() => {
                    setNavToggle(n => !n)
                }} />

                {navToggle ? <nav className="menu-btn">
                    <ul className="left-nav">
                        {/* <li className="current"><a href="index.html">Home</a></li> */}
                        <li className="current"><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="right-nav">
                        <li className="company"><Link to="/companyregister">Company</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        {/* <li><a href="register.html">Register</a></li> */}
                        <li><Link to="/register">Register</Link></li>

                    </ul>
                </nav> : null}
                <nav>
                    <ul className="left-nav">
                        {/* <li className="current"><a href="index.html">Home</a></li> */}
                        <li className="current"><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="right-nav">
                        <li className="company"><Link to="/companyregister">Company</Link></li>
                        {!isAuthenticated && (
                            <button onClick={() => loginWithRedirect()}>
                                Sign In
                            </button>
                        )}

                        {/* <li><a href="register.html">Register</a></li> */}
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Navbar
