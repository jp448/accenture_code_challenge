import React, { Component } from 'react'
import './Navbar.css'

//  Navbar Component with Logo
export default class Navbar extends Component {
    render() {
        return (
            <div className= "Navbar">
                <div className="logo">
                    <i className="fas fa-greater-than"></i>
                    <a href="https://www.accenture.com/de-de" target="_blank" rel="noopener noreferrer">
                        Accenture
                    </a>
                </div>
            </div>
        )
    }
}
