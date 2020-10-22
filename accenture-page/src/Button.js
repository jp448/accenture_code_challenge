import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <button className="Button hvr-radial-out">
                <a href="https://www.accenture.com/de-de" target="_blank">
                    {this.props.text}
                </a>
            </button>
        )
    }
}
