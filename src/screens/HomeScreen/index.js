import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelves from '../../Bookshelves';

/**
 * Render the main page of the app, the «Home», with their three bookshelves
 * and some books on them.
 */
const HomeScreen = ({ library, onUpdateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelves library={library} onUpdateBook={onUpdateBook} />
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default HomeScreen;
