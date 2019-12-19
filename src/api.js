import axios from 'axios';

const firebase = require("firebase");
var firebaseui = require('firebaseui');
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCI9rZVU9yx5hF0YoD48kzKhK5CB-Yav-U",
    authDomain: "twitter-4d812.firebaseapp.com",
    databaseURL: "https://twitter-4d812.firebaseio.com",
    projectId: "twitter-4d812",
    storageBucket: "twitter-4d812.appspot.com",
    messagingSenderId: "791690306651",
    appId: "1:791690306651:web:cd67ad520efa050e224b7e",
    measurementId: "G-WTFY1VGZF6"
};

firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var firestore = firebase.firestore();
const collectionRef = firestore.collection("Tweet")

export function getListOfTweets(startingPoint) {
    //return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`);
    return collectionRef
        .limit(startingPoint)
        .get()
}

export function createTweetWithAPI(tweet) {
    //return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`, { tweet });
    return collectionRef.add({ tweet });
}
