import React, { Component } from 'react';
import './Footer.css'

// Footer component with links to all socials
export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="social">
                    <a href="https://twitter.com/AccentureDach" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter hvr-grow"></i>
                    </a>
                    <a href="https://www.instagram.com/accenturedach" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram hvr-grow"></i>
                    </a>
                    <a href="https://www.facebook.com/accenture/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f hvr-grow"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/accenture-dach" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in hvr-grow"></i>
                    </a>
                    <a href="https://www.youtube.com/user/AccentureVideosASG/feed" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube hvr-grow"></i>
                    </a>
                </div>
                <div className="copyright">
                    <p>Proctor WebWorks 2020</p>
                </div>
            </div>
        )
    }
}


