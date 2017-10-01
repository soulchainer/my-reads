import React from 'react';
import { Link } from 'react-router-dom';
import MainWrapper from '../../MainWrapper';

/**
 * Render the 404 error page (page not found) of the app.
 */
const PageNotFoundScreen = () => (
  <MainWrapper>
    <div className="page-not-found-content">
      Page Not Found
      <Link to="/">Back to Home</Link>
    </div>
  </MainWrapper>
);

export default PageNotFoundScreen;
