import React from 'react';
import PropTypes from 'prop-types';

import LaunchesHeader from 'components/LaunchesHeader';
import LaunchesList from 'components/LaunchesList';

import 'components/Launches.css';

class Launch extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasLoaded: PropTypes.bool.isRequired,
    getLaunches: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    launches: PropTypes.arrayOf(PropTypes.shape({
      flightNumber: PropTypes.number.isRequired,
      missionName: PropTypes.string.isRequired,
      launchSiteLong: PropTypes.string.isRequired,
      launchDate: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      rocketType: PropTypes.string.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    const { isLoading, hasLoaded, getLaunches } = this.props;
    if (!isLoading && !hasLoaded) getLaunches();
  }

  render() {
    const {
      isLoading, title, launches, getLaunches,
    } = this.props;

    return (
      <div>
        <LaunchesHeader
          isLoading={isLoading}
          title={title}
          getLaunches={getLaunches}
        />
        <LaunchesList
          isLoading={isLoading}
          title={title}
          launches={launches}
        />
      </div>
    );
  }
}

export default Launch;
