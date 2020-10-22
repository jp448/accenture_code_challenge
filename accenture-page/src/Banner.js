import React, { Component } from 'react'
import Typed from 'react-typed';
import Button from './Button';
import './Banner.css'

// Banner Component using the plugin JS Typed 
export default class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.data.header}
                    <Typed 
                        strings={this.props.data.strings} 
                        typeSpeed={200} 
                        backSpeed={100}
                    />
                </h1>
                <Button text={this.props.data.button_text} href={this.props.data.link} />
            </div>
        )
    }
}
