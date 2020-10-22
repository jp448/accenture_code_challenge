import React, { Component } from 'react';
import Image from './Image'
import './ImageGrid.css'

// Image Grid component which is mapped from the information given in App under Panels > Images
export default class ImageGrid extends Component {
    render() {
        return (
            <div className="ImageGrid">
                {this.props.images.map(p => (
                    <Image image={p} />
                ))}
            </div>
        )
    }
}
