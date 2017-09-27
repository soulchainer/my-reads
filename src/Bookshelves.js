import React from 'react'
import Bookshelf from './Bookshelf'
import { shelves } from './utils/constants'

const Bookshelves = ({library}) => {

  let sortedLibrary = Object.keys(shelves)
  .filter(shelf => shelf !== 'none').map(shelf => [shelf, []])
  sortedLibrary = new Map(sortedLibrary)
  library.forEach(({shelf, cover, title, authors}, id) => {
    const bookShelf = sortedLibrary.get(shelf)
    sortedLibrary.set(shelf, [...bookShelf, {id, cover, title, authors}])
  });
  const bookshelves = Array.from(sortedLibrary).map(([shelf, books]) => (
    <Bookshelf key={shelf} shelf={shelf} books={books} />
  ))
  return <div>{bookshelves}</div>
}

export default Bookshelves
