import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { shelves, cover as defaultCover } from './utils/constants';

/**
 * @typedef {Object} ImageLinks
 * @property {string|undefined} smallThumbnail URL of the small thumbnail of the current book's cover
 * @property {string|undefined} thumbnail URL of the thumbnail of the current book's cover
 */

/**
 * If it exists, get and return the image cover of the current book.
 * If not, return the default cover image. 
 * @param {ImageLinks|undefined} imageLinks - An object with the thumbnails of the current book
 * @returns {string} The fetched cover image of the current book or the default cover image
 * @memberof SearchResults
 */
const getCover = (imageLinks) => {
  let cover = defaultCover;
  if (imageLinks) {
    const {smallThumbnail, thumbnail} = imageLinks; 
    cover = thumbnail ? thumbnail : smallThumbnail;
  }
  return cover;
}

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
              currentShelf={inLibrary ? shelves[inLibrary.shelf] : shelves.none}
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
