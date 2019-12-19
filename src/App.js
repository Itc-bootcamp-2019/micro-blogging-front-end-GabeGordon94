import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Profile from './components/ProfilePage/Profile'
import Welcome from './components/WelcomePage/Welcome'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false }
    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: { signInSuccess: () => false }
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.isSignedIn &&
            <header className="App-header h-100">
              <div className='d-flex justify-content-center'>
                <HeaderBar />
              </div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {/*  <Route exact path="/profile">
                  <Profile />
                </Route> */}

              </Switch>
            </header>
          }
          {!this.state.isSignedIn &&
            <header className="App-header d-flex align-items-center">
              <h1>Welcome</h1>
              <h3>Please Sign In</h3>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </header>
          }
        </div>
      </Router >
    );
  }
}

export default App;
