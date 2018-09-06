import { connect } from 'react-redux';

import Launches from 'components/Launches';

import { getUpcomingLaunchesAction } from 'store/actions/LaunchActions';

function mapStateToProps(state) {
  const { launch } = state;
  return {
    title: 'Upcoming',
    launches: launch.upcomingLaunches,
    isLoading: launch.isLoadingUpcomingLaunches,
    hasLoaded: launch.hasLoadedUpcomingLaunches,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLaunches: () => dispatch(getUpcomingLaunchesAction()),
  };
}

const UpcomingLaunchesContainer = connect(mapStateToProps, mapDispatchToProps)(Launches);

export default UpcomingLaunchesContainer;
