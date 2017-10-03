import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Gandalf = ({shallNoPass}) => {
  const classNames = `gandalf${shallNoPass ? ' isBlocking' : ''}`;
  return (
    <div className={classNames} />
  );
};

Gandalf.propTypes = {
  shallNoPass: PropTypes.bool.isRequired
};

export default Gandalf;
