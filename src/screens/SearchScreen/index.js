import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { search } from '../../BooksAPI';
import SearchResults from '../../SearchResults';
import Gandalf from '../../Gandalf';

/**
 * Render the search page of the app.
 */
class SearchScreen extends Component {
  state = { 
    query: '',
    searchResults: null
  };

  /**
   * Use [`debounce`](https://davidwalsh.name/javascript-debounce-function) for
   * performance reasons. Only do a search if last one was, at least,
   * 300 milliseconds ago.
   */
  debouncedSearch = debounce(search, 300, { 'leading': true });
  maxResults = 20;

  /**
   * Act to every change on the search input, making possible the search
   * feature.
   */
  handleOnChange = e => {
    const { value } = e.target;
    this.setState({query: value});
    if (value) {
      this.debouncedSearch(value, this.maxResults)
      .then(books => {
        this.setState({searchResults: books});
      });
    } else {
      this.setState({searchResults: null});
    }
  }

  render() {
    const { library, onUpdateBook, blocked } = this.props;
    return (
      <Gandalf shallNoPass={blocked}>
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
      </Gandalf>
    );
  }
}

SearchScreen.propTypes = {
  blocked: PropTypes.bool.isRequired,
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default SearchScreen;
