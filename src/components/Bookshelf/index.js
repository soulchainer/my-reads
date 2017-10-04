import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import { SHELVES } from '../../utils/constants';

/**
 * Render a bookshelf of the library
 */
const Bookshelf = ({shelf, books, onUpdateBook, showBookmark}) => {
  /**
   * Array of books that will be rendered in the bookshelf.
   */
  const bookList = books.map(({id, cover, title, authors}) => (
    <li key={id}>
      <Book
        id={id}
        cover={cover}
        title={title}
        authors={authors}
        currentShelf={shelf}
        onUpdateBook={onUpdateBook}
        showBookmark={showBookmark === id}
      />
    </li>
  ));
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{SHELVES[shelf]}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {bookList}
        </ul>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string)
  })),
  onUpdateBook: PropTypes.func.isRequired,
  showBookmark: PropTypes.string
};

export default Bookshelf;
