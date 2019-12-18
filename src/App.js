import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Profile from './components/ProfilePage/Profile'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='d-flex justify-content-center'>
            <HeaderBar />
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
