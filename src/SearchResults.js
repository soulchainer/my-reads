import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { shelves } from './utils/constants';

const generateBook = (id, cover, title, authors, library, onUpdateBook) => {
  let props = { id, cover, title, authors, onUpdateBook};
  const fromLibrary = library.get(id)
  if (fromLibrary) {
    props = {...props, currentShelf: shelves[fromLibrary.shelf]};
  }
  return <Book {...props} onUpdateBook={onUpdateBook} />;
}

const SearchResults = ({searchResults, library, onUpdateBook}) => {
  return (
    <ul className="books-grid">{
      Array.isArray(searchResults) &&
      searchResults.map(({
        id,
        imageLinks: {thumbnail: cover},
        title,
        authors
      }) => (
        <li key={id}>
          { generateBook(id, cover, title, authors, library, onUpdateBook) }
        </li>
      ))
    }</ul>
  );
}

SearchResults.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  searchResults: PropTypes.array
}

export default SearchResults;
