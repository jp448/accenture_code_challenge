import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="social">
                    <a href="https://twitter.com/AccentureDach" target="_blank">
                        <i class="fab fa-twitter hvr-grow"></i>
                    </a>
                    <a href="https://www.instagram.com/accenturedach" target="_blank">
                        <i class="fab fa-instagram hvr-grow"></i>
                    </a>
                    <a href="https://www.facebook.com/accenture/" target="_blank">
                        <i class="fab fa-facebook-f hvr-grow"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/accenture-dach" target="_blank">
                        <i class="fab fa-linkedin-in hvr-grow"></i>
                    </a>
                    <a href="https://www.youtube.com/user/AccentureVideosASG/feed" target="_blank">
                        <i class="fab fa-youtube hvr-grow"></i>
                    </a>
                </div>
                <div className="copyright">
                    <p>Proctor WebWorks 2020</p>
                </div>
            </div>
        )
    }
}


