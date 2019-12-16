import React from 'react';
import './style.css'

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.name,
            content: props.text,
            date: props.date,
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }

    render() {
        const { userName, content, date, loading } = this.state;
        return (
            <div className="tweet d-flex flex-column justify-content-around p-3">
                <div className="d-flex justify-content-between greyText">
                    <div>{userName}</div>
                    <div>{date}</div>
                </div>
                <div className="d-flex flex-wrap">
                    {content}
                </div>
            </div>

        );
    }
}

export default Tweet;