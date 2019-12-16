import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <HeaderBar />
          <Switch>
            <Route exact path="/home">
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
