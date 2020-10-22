import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Button.css';

export default class Button extends Component {
    render() {
        return (
            <button className="Button hvr-radial-out">
                <Link to={this.props.href} spy={true} smooth={true}>
                    {this.props.text}
                </Link>
            </button>
        )
    }
}
