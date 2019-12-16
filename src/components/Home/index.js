import React from 'react';
import TextBox from '../TextBox';
import Tweet from '../Tweet/tweet';
import './style.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('homeTab').classList.add('whiteText')
        if (document.getElementById('profileTab').classList.contains('whiteText')) {
            document.getElementById('profileTab').classList.remove('whiteText')
        }
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center w-100 tweetTextBox">
                <TextBox />
                
                <div className="d-flex flex-column align-items-center w-100 mt-3">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>);
    }
}
export default Home;