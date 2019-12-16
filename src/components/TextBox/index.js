import React from 'react';
import './style.css'

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="w-100 justify-content-center d-flex">
                <textarea type='text' id="newTweetBox" placeholder="What you have in mind..." pattern="/{300/"/>
                <div id="tweetButton" className="btn">Tweet</div>
            </div>
        );
    }
}

export default TextBox;