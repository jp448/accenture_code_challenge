import React, { Component } from "react";
import Navbar from './Navbar';
import Banner from './Banner';
import Panel from './Panel';
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import transform from "./images/transform.jpg";
import robot from "./images/robot.jpg";
import strategy from "./images/strategy.jpg";
import collaborators from "./images/collaborators.jpg";
import innovators from "./images/innovators.jpg";
import adapters from "./images/adapters.jpeg";
import diversity from "./images/diversity.jpeg";
import inclusion from "./images/inclusion.jpg";
import integrity from "./images/integrity.jpg";
import './App.css';


class App extends Component {
  // Data for the Panel and title Component 
  static defaultProps = {
    panels: [
      {
        name: "What We Do",
        images: [
          {
            title: "Transform",
            src: transform,
            direction: "left",
            desc: "We support business transformation, offering end-to-end solutions - from strategy development and digital transformation to operational implementation."
          },
          {
            title: "Digitalize",
            src: robot,
            direction: "down",
            desc: "We believe that new technologies require highly agile corporate structures"
          },
          {
            title: "Optimize",
            src: strategy,
            direction: "right",
            desc: "Together with our customers, we find and uncover hidden potential within the company."
          }
        ]
      },
      { 
        name: "Who We Are",
        images: [
          {
            title: "Collabortors",
            src: collaborators,
            direction: "right",
            desc: "We value a collaborative and supportive working environment."
          },
          {
            title: "Innovators",
            src: innovators,
            direction: "up",
            desc: "Together with our customers, we find and uncover hidden potential within the company."
          },
          {
            title: "Adapters",
            src: adapters,
            direction: "down",
            desc: "Rapid demographic change, individual customer expectations and new technologies require a new understanding of leadership and value creation."
          }
        ]
      },
      {
        name: "What We Stand For",
        images: [
          {
            title: "Diversity",
            src: diversity,
            direction: "up",
            desc: "We value diversity and unique contributions."
          },
          {
            title: "Inclusion",
            src: inclusion,
            direction: "down",
            desc: "We endeavor to foster a trusting, open and inclusive environment."
          },
          {
            title: "Integrity",
            src: integrity,
            direction: "right",
            desc: "We strive to be ethically unyeilding and honest. We take responsibilty for our actions."
          }
        ]
      }
    ],
    social: [
      { name: "Connect With Us" } 
    ]
  };
   
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        {this.props.panels.map(p => (
          <Panel data={p} />
        ))}
        <SocialMedia name={this.props.social.name} />
        <Footer />
    </div>
    );
  }
}

export default App;
