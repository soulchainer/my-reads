import React from 'react';
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger';
import { shelves } from './utils/constants';

const Book = ({cover, title, authors, currentShelf}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
      <BookshelfChanger
        currentShelf={currentShelf}
        handleSelectShelf={e => currentShelf = e.value}
      />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>
);

Book.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  currentShelf: PropTypes.oneOf(Object.values(shelves))
}

export default Book;
