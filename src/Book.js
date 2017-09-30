import React from 'react';
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger';
import { shelves } from './utils/constants';

const Book = ({id, cover, title, authors, currentShelf, onUpdateBook}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
      <BookshelfChanger
        book={{id, cover, title, authors}}
        currentShelf={currentShelf}
        onUpdateBook={onUpdateBook}
      />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>
);

Book.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  currentShelf: PropTypes.oneOf(Object.keys(shelves)),
  onUpdateBook: PropTypes.func.isRequired
}

export default Book;
