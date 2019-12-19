import React from 'react';
import TextBox from '../TextBox';
import Tweet from '../Tweet/tweet';
import './style.css'
import { getListOfTweets, createTweetWithAPI } from '../../../api'
import firebase from 'firebase'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: [],
            loading: true,
            visibleNum: 10
        }
        this.interval = null;
    }

    componentDidMount() {
        //this.getListFromAPI();
        //this.interval = setInterval(this.getListFromAPI.bind(this), 20000);
        this.getListLive();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getListLive() {
        var firestore = firebase.firestore();
        //.limit(10).get().then()
        const collectionRef = firestore.collection("Tweet")
        collectionRef
            .limit(this.state.visibleNum)
            .onSnapshot((response) => {
                console.log('snapshot')
                let newList = [];
                this.setState({ loading: true })
                response.forEach(doc => newList.push(doc.data().tweet))
                console.log(newList);
                let sortedList = newList.sort((a, b) => (a.date < b.date) ? 1 : -1)
                this.setState({ tweetList: sortedList, loading: false, })
            })
    }


    getListFromAPI() {
        let newNum = this.state.visibleNum;
        newNum += 10;
        getListOfTweets(newNum).then((response) => {
            debugger
            let newList = [];
            response.forEach(doc => newList.push(doc.data().tweet))
            let sortedList = newList.sort((a, b) => (a.date < b.date) ? 1 : -1)
            this.setState({ tweetList: sortedList, loading: false, visibleNum: newNum })
            //let sortedList = response.data.tweets.sort((a, b) => (a.date < b.date) ? 1 : -1)
            //this.setState({ tweetList: sortedList, loading: false })
        }).catch((err) => {
            console.log(err);
        })
    }

    submitTweet(name, text, date) {
        this.setState({ loading: true });
        const obj = { 'content': text, 'userName': name, 'date': date };
        createTweetWithAPI(obj).then(() => {
            /* let newList = this.state.tweetList;
            newList.unshift(obj); */
            //console.log('arrived')
            this.setState({ tweetList: [obj, ...this.state.tweetList], loading: false })
            text = '';
        }).catch((error) => {
            text = error;
        })
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center w-100 tweetTextBox" >
                <TextBox onClick={(name, text, date) => { this.submitTweet(name, text, date) }} />
                {!this.state.loading &&
                    (this.state.tweetList.length > 0 &&
                        <div className="d-flex flex-column align-items-center w-100 mt-3">
                            {this.state.tweetList.map((tweet, i) => {
                                return (<div key={i} className="w-100 justify-content-center d-flex">
                                    <Tweet key={i} name={tweet.userName} date={tweet.date} text={tweet.content} />
                                </div>);
                            })}
                            <button onClick={() => { this.getListFromAPI() }}>Next</button>
                        </div>)
                }
                {this.state.loading && <div className="lds-ripple mt-5"><div></div><div></div></div>}
            </div >);
    }
}
export default Home;