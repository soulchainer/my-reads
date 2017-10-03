import React from 'react';
import PropTypes from 'prop-types';

const Gandalf = ({children}) => (
  <div>
    {children}
  </div>
);

Gandalf.propTypes = {
  shallNoPass: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};

export default Gandalf;
