import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Bookshelves from '../../Bookshelves'

const HomeScreen = ({ library }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelves library={library}/>
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