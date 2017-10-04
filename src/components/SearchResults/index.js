import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import getCover from '../../utils/getCover';

/**
 * Render the books from the search results, in the search page.
 */
const SearchResults = ({searchResults, library, onUpdateBook, showBookmark}) => {
  return (
    <ul className="books-grid">{
      Array.isArray(searchResults) &&
      searchResults.map(({
        id,
        imageLinks,
        title,
        authors
      }) => {
        /**
         * If the book is already in the library, get their info right away.
         * At this moment, this is used to know in which shelf is the book.
         */
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
              showBookmark={showBookmark === id}
            />
          </li>
        );
      })
    }</ul>
  );
};

SearchResults.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  searchResults: PropTypes.array,
  showBookmark: PropTypes.string
};

export default SearchResults;
