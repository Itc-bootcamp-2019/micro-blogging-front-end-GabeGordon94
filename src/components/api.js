import React from 'react'; 
import axios from 'axios';

export function getListOfTweets() {
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`);
}

export function createTweetWithAPI(tweet) {
    return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`,{tweet});
}