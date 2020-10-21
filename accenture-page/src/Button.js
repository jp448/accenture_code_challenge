import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <button className="Button hvr-radial-out">{this.props.text}</button>
        )
    }
}
