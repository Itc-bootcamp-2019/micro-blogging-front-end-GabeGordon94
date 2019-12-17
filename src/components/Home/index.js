import React from 'react';
import TextBox from '../TextBox';
import Tweet from '../Tweet/tweet';
import './style.css'
import { getListOfTweets, createTweetWithAPI } from '../api'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: [],
            loading: true
        }
    }

    componentDidMount() {
        document.getElementById('homeTab').classList.add('whiteText')
        if (document.getElementById('profileTab').classList.contains('whiteText')) {
            document.getElementById('profileTab').classList.remove('whiteText')
        }
        this.getListFromAPI();
        setInterval(this.getListFromAPI.bind(this), 20000);
    }

    getListFromAPI() {
        console.log("got list from api")
        this.setState({ loading: true });
        getListOfTweets().then((response) => {
            let sortedList = response.data.tweets.sort((a, b) => (a.date < b.date) ? 1 : -1)
            this.setState({ tweetList: sortedList, loading: false })
            try{
                if(document.getElementById('newTweetBox').value == "" || document.getElementById('newTweetBox').value == null){
                    document.getElementById('tweetButton').disabled = true;
                }else{
                    document.getElementById('tweetButton').disabled = false;
                }
            }catch(err){
                
            }
        })
    }

    submitTweet(name, text, date) {
        document.getElementById('tweetButton').disabled = true;
        let box = document.getElementById('newTweetBox')
        this.setState({ loading: true });
        const obj = { 'content': text, 'userName': name, 'date': date };
        createTweetWithAPI(obj).then((response) => {
            const newList = this.state.tweetList;
            newList.unshift(obj);
            this.setState({ tweetList: newList, loading: false })
            box.value = '';
        }).catch((error) => {
            box.value = error;
        })
    }

    render() {
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
                        </div>)}
                {this.state.loading && <div className="lds-ripple mt-5"><div></div><div></div></div>}
            </div>);
    }
}
export default Home;