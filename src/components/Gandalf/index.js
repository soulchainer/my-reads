import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Gandalf = () => (
  <div className="gandalf">
    <div className="bookmark"></div>
  </div>
);

Gandalf.propTypes = {
  shallNoPass: PropTypes.bool.isRequired
};

export default Gandalf;
