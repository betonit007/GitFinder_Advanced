import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Alert from '../components/Alert';
import About from '../components/pages/About';
import User from '../components/User';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import './App.css';

import GitHubState from '../context/github/GitHubState';
import AlertState from '../context/alert/AlertState';

const App = () => {
        
      return (
        <GitHubState>
          <AlertState>
          <Router>
              <div className='app'>
                  <Navbar 
                    title="GitHub Finder"
                  />
                  <div className="container">
                    <Alert/>
                    <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/about' component={About} />
                      <Route exact path='/user/:login' component={User}/>
                      <Route component={NotFound} />
                    </Switch>
                  </div>
              </div>
          </Router>
          </AlertState>
        </GitHubState>
      )
}

export default App;