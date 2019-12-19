import React from 'react';
import '../../HomePage/Home/style.css';
import './style.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase'


class Profle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameHolder: ''
        }
    }

    componentDidMount() {
        //this.setState({username:localStorage.getItem('username')})
        this.setState({ username: firebase.auth().currentUser.displayName })
        localStorage.setItem('username', firebase.auth().currentUser.displayName)
    }

    saveUserName() {
        let input = this.state.usernameHolder;
        if (input) {
            localStorage.setItem('username', input);
            this.setState({ username: input });
            input = '';
        }
    }


    render() {
        return (
            <div className='d-flex flex-column container mr-0 tweetTextBox '>
                <div className="d-flex mb-2">
                    <h2 className="mr-3">Profile</h2>
                    <img alt="profile picture" src={firebase.auth().currentUser.photoURL} id="proPic" />
                </div>
                <h6>User Name: {this.state.username}</h6>
                <input type='text' placeholder='Change Username Here' id="inputUserName"
                    onChange={(event) => {
                        this.setState({ usernameHolder: event.target.value })
                    }} />
                <div className="mt-2 saveButton" >
                    <Link to="/"><button className="btn btn-primary" onClick={() => this.saveUserName()}>Save
                </button></Link>
                </div>
            </div>
        );
    }
}
export default Profle;