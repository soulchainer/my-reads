import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper';
import Bookshelves from '../../components/Bookshelves';
import Gandalf from '../../components/Gandalf';

/**
 * Render the main page of the app, the «Home», with their three bookshelves
 * and some books on them.
 */
const HomeScreen = ({ library, onUpdateBook, blocked }) => (
  <Gandalf shallNoPass={blocked}>
    <MainWrapper>
      <div>
        <div className="list-books-content">
          <Bookshelves library={library} onUpdateBook={onUpdateBook} />
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    </MainWrapper>
  </Gandalf>
);

HomeScreen.propTypes = {
  blocked: PropTypes.bool.isRequired,
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default HomeScreen;
