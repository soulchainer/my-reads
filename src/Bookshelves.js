import React from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import { shelves } from './utils/constants'

const Bookshelves = ({library, onUpdateBook}) => {

  let sortedLibrary = Object.keys(shelves)
  .filter(shelf => shelf !== 'none').map(shelf => [shelf, []])
  sortedLibrary = new Map(sortedLibrary)
  library.forEach(({shelf, cover, title, authors}, id) => {
    const bookShelf = sortedLibrary.get(shelf)
    sortedLibrary.set(shelf, [...bookShelf, {id, cover, title, authors}])
  });
  const bookshelves = Array.from(sortedLibrary).map(([shelf, books]) => (
    <Bookshelf
      key={shelf}
      shelf={shelf}
      books={books}
      onUpdateBook={onUpdateBook}
    />
  ))
  return <div>{bookshelves}</div>
}

Bookshelves.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default Bookshelves
