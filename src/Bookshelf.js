import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { shelves } from './utils/constants';

const Bookshelf = ({shelf, books}) => {
  const bookList = books.map(({id, cover, title, authors}) => (
    <li key={id}>
      <Book
        cover={cover}
        title={title}
        authors={authors}
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
    authors: PropTypes.arrayOf(PropTypes.string)
  }))
};

export default Bookshelf;
