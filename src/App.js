import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import getCover from './utils/getCover';
import './App.css';

/**
 * Render the whole «My Reads» app.
 */
class App extends Component {
  state = {
    /**
     * Keep a `library` state, which will be updated with any change made to
     * the library. This way, there is only needed one call to `getAll()`, just
     * when the app starts, to populate this state. Of course, the persisted
     * library is updated properly with every change.
     */
    library: new Map(),
    blocked: false,
  };

  componentDidMount() {
    this.setState({ blocked: true });
    /**
     * Get all the books persisted in user library when application is started
     */
    getAll().then(books => {
      let library = this.state.library;
      books.forEach(({
        id,
        imageLinks,
        title,
        authors,
        shelf
      }) => {
        library.set(id, { cover: getCover(imageLinks), title, authors, shelf });
      });
      this.setState({ library, blocked: false });
    });
  }

  /**
   * Update the current book shelf in our library if the book is already there
   * or add it if not.
   * @param {Object} book The book to be added or updated
   * @param {string} shelf The shelf where the book will be from now on
   * @memberof App
   */
  onUpdateBook = (book, shelf) => {
    this.setState({ blocked: true });
    update(book, shelf).then(bookshelves => {
      const {id, cover, title, authors} = book;
      let library = this.state.library;
      library.set(id, { cover, title, authors, shelf });
      this.setState({ library, blocked: false });
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
              <HomeScreen
                library={this.state.library}
                onUpdateBook={this.onUpdateBook}
                blocked={blocked}
              />
            )}/>
            <Route path="/search" render={() => (
              <SearchScreen
                library={this.state.library}
                onUpdateBook={this.onUpdateBook}
                blocked={blocked}
              />
            )}/>
            <Route render={({location}) => (
              <PageNotFoundScreen pathname={location.pathname} />
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
