import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Bookshelf from '../../Bookshelf';
import { shelves } from '../../utils/constants'

const HomeScreen = ({ library }) => {
  // TODO: extract this functionality to a function, maybe to an external file
  let sortedLibrary = Object.keys(shelves).map(shelf => [shelf, []])
  sortedLibrary = new Map(sortedLibrary)
  library.forEach(({shelf, cover, title, authors}, id) => {
    const bookShelf = sortedLibrary.get(shelf)
    sortedLibrary.set(shelf, [...bookShelf, {id, cover, title, authors}])
  });
  const bookshelves = Array.from(sortedLibrary).map(([shelf, books]) => (
    <Bookshelf key={shelf} shelf={shelf} books={books} />
  ))

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>{bookshelves}</div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

HomeScreen.propTypes = {
  library: PropTypes.object
}

export default HomeScreen