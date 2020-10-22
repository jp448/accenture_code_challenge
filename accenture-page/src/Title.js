import React, { Component } from 'react';
import './Title.css';

// Title component used in Panel and Soical Media Components
export default class Title extends Component {
    render() {
        return (
            <div className="Title" id={this.props.id} >
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
