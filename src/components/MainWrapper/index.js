import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MainWrapper = ({children}) => (
  <div>
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    {children}
  </div>
);

MainWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainWrapper;
