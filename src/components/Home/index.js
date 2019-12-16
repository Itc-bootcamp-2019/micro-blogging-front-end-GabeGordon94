import React from 'react';
import TextBox from '../TextBox';
import Tweet from '../Tweet/tweet';
import './style.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetList: []
        }
    }

    componentDidMount() {
        document.getElementById('homeTab').classList.add('whiteText')
        if (document.getElementById('profileTab').classList.contains('whiteText')) {
            document.getElementById('profileTab').classList.remove('whiteText')
        }

       // this.setState({tweetList:this.getListFromLocalStorage()})
    }

    getListFromLocalStorage(){
        let list=JSON.parse(localStorage.getItem('ListOfTweets'));
        console.log("LIST"+list);
        if(list == null){
            list=[];
        }
        return list;
    }

    submitTweet(name, text, date) {
        console.log('tweeted');
        
        const obj = { 'content': text, 'userName': name, 'date': date };
        //let list=this.state.tweetList;
        let localStorageList=this.getListFromLocalStorage();
        debugger
        localStorageList.push(obj);
        localStorage.setItem('ListOfTweets',JSON.stringify(localStorageList))
        /* list.push(obj);
        this.setState({ tweetList: list }) */
        this.setState({ tweetList:localStorageList})
    
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center w-100 tweetTextBox">
                <TextBox onClick={(name,text,date)=>{this.submitTweet(name,text,date)}} />
                {this.state.tweetList.length > 0 &&
                <div className="d-flex flex-column align-items-center w-100 mt-3">
                    {this.state.tweetList.map((tweet, i) => {
                       return (<div key={i} className="w-100 justify-content-center d-flex">
                            <Tweet name={tweet.userName} date={tweet.date} text={tweet.content} />
                        </div>);
                    })}
                </div>}
            </div>);
    }
}
export default Home;