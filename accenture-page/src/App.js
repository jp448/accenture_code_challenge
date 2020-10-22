import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FormattedMessage } from 'react-intl';
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
        name: <FormattedMessage id="panel.1.title" defaultMessage="What We Do" />,
        name_id: 1,
        panel_id: uuidv4(),
        images: [
          {
            title: <FormattedMessage id="title.transform" defaultMessage="Transform" />,
            image_id: uuidv4(),
            src: transform,
            direction: "left",
            desc: <FormattedMessage id="image.desc.transform" defaultMessage="We support business transformation, offering end-to-end solutions - from strategy development and digital transformation to operational implementation." />
          },
          {
            title: <FormattedMessage id="title.digitalize" defaultMessage="Digitalize" />,
            image_id: uuidv4(),
            src: robot,
            direction: "down",
            desc: <FormattedMessage id="image.desc.digitalize" defaultMessage="We believe that new technologies require highly agile corporate structures" />
          },
          {
            title: <FormattedMessage id="title.optimize" defaultMessage="Optimize" />,
            image_id: uuidv4(),
            src: strategy,
            direction: "right",
            desc: <FormattedMessage id="image.desc.optimize" defaultMessage= "Together with our customers, we find and uncover hidden potential within the company." />
          }
        ]
      },
      { 
        name:  <FormattedMessage id="panel.2.title" defaultMessage="Who We Are" />,
        name_id: 2,
        panel_id: uuidv4(),
        images: [
          {    
            title: <FormattedMessage id="title.collaborators" defaultMessage="Collaborators" />,
            image_id: uuidv4(),
            src: collaborators,
            direction: "right",
            desc: <FormattedMessage id="image.desc.collaborators" defaultMessage= "We view enormous changes as an opportunity to anchor innovation in the company's DNA." />
          },
          {
            title: <FormattedMessage id="title.innovators" defaultMessage="Innovators" />,
            image_id: uuidv4(),
            src: innovators,
            direction: "up",
            desc: <FormattedMessage id="image.desc.innovators" defaultMessage= "Together with our customers, we find and uncover hidden potential within the company." />
          },
          {
            title: <FormattedMessage id="title.adapters" defaultMessage="Adapters" />,
            image_id: uuidv4(),
            src: adapters,
            direction: "down",
            desc: <FormattedMessage id="image.desc.adapters" defaultMessage= "Rapid demographic change, individual customer expectations and new technologies require a new understanding of leadership and value creation."/>
          }
        ]
      },
      {
        name: <FormattedMessage id="panel.3.title" defaultMessage="What We Stand For" />,
        name_id: 3,
        panel_id: uuidv4(),
        images: [
          {
            title:  <FormattedMessage id="title.diversity" defaultMessage="Diversity" />,
            image_id: uuidv4(),
            src: diversity,
            direction: "up",
            desc: <FormattedMessage id="image.desc.diversity" defaultMessage= "We value diversity and unique contributions." />
          },
          {
            title: <FormattedMessage id="title.inclusion" defaultMessage="Inclusion" />,
            image_id: uuidv4(),
            src: inclusion,
            direction: "down",
            desc: <FormattedMessage id="image.desc.inclusion" defaultMessage= "We endeavor to foster a trusting, open and inclusive environment." />
          },
          {
            title: <FormattedMessage id="title.integrity" defaultMessage="Integrity" />,
            image_id: uuidv4(),
            src: integrity,
            direction: "right",
            desc: <FormattedMessage id="image.desc.integrity" defaultMessage= "We strive to be ethically unyielding and honest. We take responsibility for our actions."/>
          }
        ]
      }
    ],
    social: 
      { 
        name: <FormattedMessage id="panel.4.title" defaultMessage="Connect With Us" />,
        twitter: "AccentureDach",
        instagram: "https://www.instagram.com/p/CElh__ZgJYJ/"
       },
    banner:
      {
        header: "Let There Be ",
        strings: ['Change', 'Discovery', 'Innovation', 'Change'],
        button_text: "Discover More",
        link: "1"
      }
  };
   
  render() {
    return (
        <div className="App">
          <Navbar />
          <Banner data={this.props.banner} />
          {this.props.panels.map(p => (
            <Panel data={p} key={p.panel_id} />
          ))}
          <SocialMedia data={this.props.social} />
          <Footer />
        </div>
    );
  }
}

export default App;
