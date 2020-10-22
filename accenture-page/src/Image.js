import React, { Component } from 'react';
import { Slide } from "react-awesome-reveal";
import './Image.css';

// Image Component which has a click event- when clicked on the info and photo are toggled
export default class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgshown: true
        };
        this.handleClick = this.handleClick.bind(this);    
    }

    imageFlip() {
        this.setState(st=>{
            return {
                imgshown: !this.state.imgshown
            };
        });
    }

    handleClick(e) {
        this.imageFlip();
    }

    render() {
        return (
            <div className="Image">
                <Slide direction= {this.props.image.direction} >
                    {this.state.imgshown ? <img className="hvr-grow" src={this.props.image.src} onClick={this.handleClick} /> : <div className="text" onClick={this.handleClick}><p>{this.props.image.desc}</p></div>}
                </Slide>
                <h4>{this.props.image.title}</h4>
            </div>
        )
    }
}
