import React, { Component } from 'react';
import { Slide } from "react-awesome-reveal";
import robot from "./images/robot.jpg";
import './Image.css';
export default class Image extends Component {
    render() {
        return (
            <div className="Image">
                <Slide direction= {this.props.direction} >
                    <img src={robot}/>
                </Slide>
                <h4>Transform</h4>
            </div>
        )
    }
}
