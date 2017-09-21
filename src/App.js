import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import './App.css';

class BooksApp extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/search" component={SearchScreen}/>
            <Route component={PageNotFoundScreen}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
