import React, { Component } from 'react';
import Title from './Title';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import './SocialMedia.css'

// Social Media component uses two plugins react-twitter-embeded and react-instagram-embed 
export default class SocialMedia extends Component {
    render() {
        return (
            <div className="SocialMedia">
                <Title name={this.props.name}  />
                <div className="social">
                    <div className="twitter">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="AccentureDach"
                            options={{height: 670}}
                        />
                    </div>
                    <div className="instagram">
                        <InstagramEmbed
                        url='https://www.instagram.com/p/CElh__ZgJYJ/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
