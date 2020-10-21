import React, { Component } from 'react'
import Title from './Title'
import Image from './Image'
import './Panel.css'


export default class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <Title />
                <div className="images">
                    <Image direction='left' />
                    <Image direction='down' />
                    <Image direction='right' />
                </div>
            </div>
        )
    }
}
