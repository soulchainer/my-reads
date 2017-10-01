import React from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { SHELVES } from './utils/constants';

/**
 * Render the group of bookshelves of the main page, «home».
 */
const Bookshelves = ({library, onUpdateBook}) => {
  /**
   * Library rearranged by shelves. It's a `Map`, with shelves names as keys and
   * and array of book objects as values.
   */
  let categorizedLibrary = Object.keys(SHELVES)
  .filter(shelf => shelf !== 'none').map(shelf => [shelf, []]);
  categorizedLibrary = new Map(categorizedLibrary);
  library.forEach(({shelf, cover, title, authors}, id) => {
    if (shelf === 'none') return;
    const bookShelf = categorizedLibrary.get(shelf);
    categorizedLibrary.set(shelf, [...bookShelf, {id, cover, title, authors}]);
  });
  /**
   * Array of bookshelves to be shown in the main page, «Home».
   */
  const bookshelves = Array.from(categorizedLibrary).map(([shelf, books]) => (
    <Bookshelf
      key={shelf}
      shelf={shelf}
      books={books}
      onUpdateBook={onUpdateBook}
    />
  ));
  return <div>{bookshelves}</div>;
};

Bookshelves.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Bookshelves;
