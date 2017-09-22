import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFoundScreen = () => (
  <div className="page-not-found">
      Page Not Found
      <Link to="/">Back to Home</Link>
  </div>
);

export default PageNotFoundScreen;
