import React from 'react'
import pc from './pc.png'
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
    
    return (
        
        <>
        
            <section className="hero">
                <div className="container">
                    <a href="/explore" className="find-work-button">Find Work</a>
                </div>
            </section>
            <section className="features-section">
                <div className="container">
                    <div className="description-list">
                        <ul className="description-text">
                            <p>What is <span>FindmeaJob</span>?</p>
                            <li>A site to help you find the job you want</li>

                        </ul>
                    </div>
                    <div className="features-list">

                        <img id="pc-cta" className="pc-img" src={pc} alt="Open Menu" />
                        <ul className="features-text">
                            <p>What is <span>FindmeaJob</span>?</p>
                            <li>Find your dream job</li>
                            <li>Negotiate your salary before agreeing</li>
                            <li>Change your profile easily</li>
                            <li>It's simple</li>
                            <li>It's free</li>

                        </ul>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Home

