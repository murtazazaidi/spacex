import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import { GA_API } from 'configs/constants';

function googleAnalyticsTrack(page) {
  if (GA_API) {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}

const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    googleAnalyticsTrack(page);
  };

  const HOC = (props) => {
    const { location: { pathname } = {} } = props;
    const { page } = pathname;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };

  HOC.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  HOC.defaultProps = {
    location: {
      pathname: '',
    },
  };

  return HOC;
};

export default withTracker;
