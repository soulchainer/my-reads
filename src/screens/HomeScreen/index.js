import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper';
import Bookshelves from '../../components/Bookshelves';
import Gandalf from '../../components/Gandalf';
import './styles.css';

/**
 * Render the main page of the app, the «Home», with their three bookshelves
 * and some books on them.
 */
const HomeScreen = ({ library, onUpdateBook, blocked, showBookmark }) => (
  <div>
    <Gandalf shallNoPass={blocked} />
    <MainWrapper>
      <div>
        <div className="list-books-content">
          <Bookshelves
            library={library}
            onUpdateBook={onUpdateBook}
            showBookmark={showBookmark}
          />
        </div>
        <div className="open-search">
          <Link to='/search' className="open-search-link">Add a book</Link>
        </div>
      </div>
    </MainWrapper>
  </div>
);

HomeScreen.propTypes = {
  blocked: PropTypes.bool.isRequired,
  library: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  showBookmark: PropTypes.string
};

export default HomeScreen;
