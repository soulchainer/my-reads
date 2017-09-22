import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { shelves } from './utils/constants';

const Bookshelf = ({shelf, books}) => {
  const bookList = books.map((book, index) => (
    <li key={index}>
      <Book
        cover={book.cover}
        title={book.title}
        authors={book.authors}
        currentShelf={shelves[shelf]}
      />
    </li>
  ))
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelves[shelf]}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {bookList}
        </ul>
      </div>
    </div>
  )
};

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.string
  }))
};

export default Bookshelf;
