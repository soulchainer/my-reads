import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getAll, update } from '../../utils/BooksAPI';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import PageNotFoundScreen from '../../screens/PageNotFoundScreen';
import getCover from '../../utils/getCover';
import './styles.css';

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
    showBookmark: '',
  };

  componentDidMount() {
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
      this.setState({ library });
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
    const {id, cover, title, authors} = book;
    this.setState({ blocked: true, showBookmark: id});
    update(book, shelf).then(bookshelves => {
      let library = this.state.library;
      library.set(id, { cover, title, authors, shelf });
      this.setState({ library, blocked: false, showBookmark: '' });
    });
  };

  render() {
    const {blocked, library, showBookmark} = this.state;
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => (
              <HomeScreen
                library={library}
                onUpdateBook={this.onUpdateBook}
                blocked={blocked}
                showBookmark={showBookmark}
              />
            )}/>
            <Route path="/search" render={() => (
              <SearchScreen
                library={library}
                onUpdateBook={this.onUpdateBook}
                blocked={blocked}
                showBookmark={showBookmark}
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
