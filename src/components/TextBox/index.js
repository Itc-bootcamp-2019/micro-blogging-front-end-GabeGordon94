import React, {useState} from 'react';
import './style.css';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        let userName=localStorage.getItem('username');
        this.state = {
            name: userName,
            text: ''
        }
    }

    componentDidMount() {
        document.getElementById('tweetButton').disabled = true
    }

    validator(event) {
        document.getElementById('exceedingLength').classList.add('d-none');
        const input = event.target.value;
        if (input.length == 0) {
            document.getElementById('tweetButton').disabled = true
        } else if (input.length == 140) {
            document.getElementById('exceedingLength').classList.remove('d-none');
        } else {
            document.getElementById('tweetButton').disabled = false;
            this.setState({ text: input })
        }

    }

    getDate() {
        var d = new Date();
        return d.toISOString();
    }


    render() {
        const { name, text } = this.state;
        return (
            <div className="w-100 justify-content-center d-flex">
                <textarea type='text' id="newTweetBox" placeholder="What you have in mind..." maxLength='140'
                    onChange={(event) => this.validator(event)} />
                <button id="tweetButton" className="btn" onClick={() =>
                    this.props.onClick(name, text, this.getDate())}
                >Tweet</button>
                <span id="exceedingLength" className="d-none">The tweet can't contain more then 140 chars.</span>
            </div>
        );
    }
}

export default TextBox;