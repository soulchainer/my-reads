import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import getCover from './utils/getCover';

const SearchResults = ({searchResults, library, onUpdateBook}) => {
  return (
    <ul className="books-grid">{
      Array.isArray(searchResults) &&
      searchResults.map(({
        id,
        imageLinks,
        title,
        authors
      }) => {
        const inLibrary = library.get(id);
        return (
          <li key={id}>
            <Book
              id={id}
              cover={getCover(imageLinks)}
              title={title}
              authors={authors}
              currentShelf={inLibrary ? inLibrary.shelf : 'none'}
              onUpdateBook={onUpdateBook}
            />
          </li>
        )
      })
    }</ul>
  );
}

SearchResults.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  searchResults: PropTypes.array
}

export default SearchResults;
