import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { search } from '../../BooksAPI';
import Book from '../../Book';
import { shelves } from '../../utils/constants';

class SearchScreen extends Component {
  state = { 
    query: '',
    searchResults: null
  }

  debouncedSearch = debounce(search, 300, { 'leading': true });
  maxResults = 20

  handleOnChange = e => {
    const { value } = e.target
    this.setState({query: value})
    if (value) {
      this.debouncedSearch(value, this.maxResults)
      .then(books => {
        this.setState({searchResults: books})
      })
    } else {
      this.setState({searchResults: null})
    }
  }

  generateBook = (id, cover, title, authors, library) => {
    let props = { id, cover, title, authors, onUpdateBook};
    const fromLibrary = library.get(id)
    if (fromLibrary) {
      props = {...props, currentShelf: shelves[fromLibrary.shelf]};
    }
    return <Book {...props} onUpdateBook />;
  }

  render() {
    const { library, onUpdateBook } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleOnChange}
            />

          </div>
        </div>
      <div className="search-books-results">
        <ul className="books-grid">
          {
            Array.isArray(this.state.searchResults) &&
            this.state.searchResults.map(({
              id,
              imageLinks: {thumbnail: cover},
              title,
              authors
            }) => (
              <li key={id}>
                { this.generateBook(id, cover, title, authors, library) }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    );
  }
}

SearchScreen.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default SearchScreen;
