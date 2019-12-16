import React from 'react';
import './style.css'

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            text: null,
            date: null,
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading:false,
            name:'gabe',
            text:'hey gabe', 
            date:'3.3.13'
        })
    }

    render() {
        const { name, text, date, loading } = this.state;
        return (
            <>
                {!loading &&
                <div className="tweet">
                    </div>}
                {loading && <div>Loading...</div>}
            </>
        );
    }
}

export default Tweet;