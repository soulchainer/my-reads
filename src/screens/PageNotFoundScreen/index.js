import React from 'react';
import { Link } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper';
import './styles.css';

/**
 * Render the 404 error page (page not found) of the app.
 */
const PageNotFoundScreen = ({pathname}) => (
  <MainWrapper>
    <div className="page-not-found-content">
      <div>Page <code>{pathname}</code> Not Found</div>
      <Link to="/">Back to Home</Link>
    </div>
  </MainWrapper>
);

export default PageNotFoundScreen;
