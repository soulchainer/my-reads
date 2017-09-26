import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import './App.css';

class BooksApp extends Component {
  state = {
    library: new Map()
  }

  componentDidMount() {
    /**
     * Get all the books in user library when application is started
     */
    getAll().then(books => {
      let library = this.state.library
      books.forEach(({
        id,
        imageLinks: {thumbnail: cover},
        title,
        authors,
        shelf
      }) => {
        library.set(id, { cover, title, authors, shelf })
      });
      this.setState({library});
    });
  }

  /**
   * Update the current book shelf in our library if the book is already there
   * or add it if not.
   * @param {Object} book The book to be added or updated
   * @param {string} shelf The shelf where the book will be from now on
   * @memberof BooksApp
   */
  onUpdateBook = (book, shelf) => {
    update(book, shelf).then(({id, cover, title, authors}, shelf) => {
      this.setState((prevState) => ({
        library: prevState.library.set(id, { cover, title, authors, currentShelf: shelf })
      }));
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
              <HomeScreen library={this.state.library} />
            )}/>
            <Route path="/search" render={() => (
              <SearchScreen library={this.state.library} />
            )}/>
            <Route component={PageNotFoundScreen}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp;
