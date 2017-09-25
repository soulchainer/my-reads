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
    getAll().then(books => {
      let library = this.state.library
      books.forEach(({
        id,
        imageLinks: {thumbnail: cover},
        title,
        authors,
        shelf
      }) => {
        
      });
      this.setState((prevState) => ({
        library: books.map(() => prevState.library.set(id, { cover, title, authors, shelf }))
      }));
      console.dir(this.state.library)
    });
  }

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
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/search" render={ () => (
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
