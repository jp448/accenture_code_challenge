import React, { Component } from 'react'
import Title from './Title'
import ImageGrid from './ImageGrid'
import './Panel.css'

// Panel Component contains the title and Image grid recieves props from the App Component
export default class Panel extends Component {
    render() {
        return (
            <div className="Panel">
                <Title name={this.props.data.name} id={this.props.data.name_id}/>
                <ImageGrid images={this.props.data.images} />
            </div>
        )
    }
}
