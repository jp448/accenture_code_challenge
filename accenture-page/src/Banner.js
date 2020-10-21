import React, { Component } from 'react'
import Typed from 'react-typed';
import Button from './Button';
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>Let There Be&nbsp;
                    <Typed 
                        strings={['Change', 'Discovery', 'Innovation', 'Change']} 
                        typeSpeed={200} 
                        backSpeed={100}
                    />
                </h1>
                <Button text={'Discover More'} />
            </div>
        )
    }
}
