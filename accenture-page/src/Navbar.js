import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className= "Navbar">
                <div className="logo">
                    <i class="fas fa-greater-than"></i>
                    <a>Accenture</a>
                </div>
            </div>
        )
    }
}
