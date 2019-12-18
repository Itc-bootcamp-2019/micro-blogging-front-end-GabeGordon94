import React from 'react';
import TextBox from '../TextBox';
import Tweet from '../Tweet/tweet';
import './style.css'
import { getListOfTweets, createTweetWithAPI } from '../../../api'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: [],
            loading: true
        }
        this.interval = null;
    }

    componentDidMount() {
        this.getListFromAPI();
        this.interval = setInterval(this.getListFromAPI.bind(this), 20000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getListFromAPI() {
        this.setState({ loading: true });
        getListOfTweets().then((response) => {
            let sortedList = response.data.tweets.sort((a, b) => (a.date < b.date) ? 1 : -1)
            this.setState({ tweetList: sortedList, loading: false })
        })
    }

    submitTweet(name, text, date) {
        this.setState({ loading: true });
        //this.setState({ doIt: false });
        const obj = { 'content': text, 'userName': name, 'date': date };
        createTweetWithAPI(obj).then((response) => {
            /* let newList = this.state.tweetList;
            newList.unshift(obj); */
            //console.log('arrived')
            this.setState({ tweetList: [obj,...this.state.tweetList],loading:false})
            text = '';
        }).catch((error) => {
            text = error;
        })
    }

    render() {
        debugger
        return (
            <div className="d-flex flex-column align-items-center w-100 tweetTextBox">
                <TextBox onClick={(name, text, date) => { this.submitTweet(name, text, date) }} />
                {!this.state.loading && 
                    (this.state.tweetList.length > 0 &&
                        <div className="d-flex flex-column align-items-center w-100 mt-3">
                            {this.state.tweetList.map((tweet, i) => {
                                return (<div key={i} className="w-100 justify-content-center d-flex">
                                    <Tweet key={i} name={tweet.userName} date={tweet.date} text={tweet.content} />
                                </div>);
                            })}
                        </div>)
                }
                {this.state.loading && <div className="lds-ripple mt-5"><div></div><div></div></div>}
            </div>);
    }
}
export default Home;