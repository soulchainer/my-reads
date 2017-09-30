import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { search } from '../../BooksAPI';
import SearchResults from '../../SearchResults'

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
          <SearchResults
            searchResults={this.state.searchResults}
            library={library}
            onUpdateBook={onUpdateBook}
          />
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
