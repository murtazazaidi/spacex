import { connect } from 'react-redux';

import Launches from 'components/Launches';

import { getPastLaunchesAction } from 'store/actions/LaunchActions';

function mapStateToProps(state) {
  const { launch } = state;
  return {
    title: 'Past',
    launches: launch.pastLaunches,
    isLoading: launch.isLoadingPastLaunches,
    hasLoaded: launch.hasLoadedPastLaunches,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLaunches: () => dispatch(getPastLaunchesAction()),
  };
}

const PastLaunchesContainer = connect(mapStateToProps, mapDispatchToProps)(Launches);

export default PastLaunchesContainer;
