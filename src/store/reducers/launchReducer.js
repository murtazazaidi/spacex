import * as types from 'constants/LaunchTypes';

const initialState = {
  pastLaunches: [],
  isLoadingPastLaunches: false,
  hasLoadedPastLaunches: false,
  upcomingLaunches: [],
  isLoadingUpcomingLaunches: false,
  hasLoadedUpcomingLaunches: false,
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PAST_LAUNCHES_INIT: {
      return Object.assign({}, state, {
        pastLaunches: [],
        isLoadingPastLaunches: true,
        hasLoadedPastLaunches: false,
      });
    }
    case types.GET_PAST_LAUNCHES_SUCCESS: {
      return Object.assign({}, state, {
        pastLaunches: action.data,
        isLoadingPastLaunches: false,
        hasLoadedPastLaunches: true,
      });
    }
    case types.GET_PAST_LAUNCHES_FAILURE: {
      return Object.assign({}, state, {
        pastLaunches: [],
        isLoadingPastLaunches: false,
        hasLoadedPastLaunches: false,
      });
    }
    case types.GET_UPCOMING_LAUNCHES_INIT: {
      return Object.assign({}, state, {
        upcomingLaunches: [],
        isLoadingUpcomingLaunches: true,
        hasLoadedUpcomingLaunches: false,
      });
    }
    case types.GET_UPCOMING_LAUNCHES_SUCCESS: {
      return Object.assign({}, state, {
        upcomingLaunches: action.data,
        isLoadingUpcomingLaunches: false,
        hasLoadedUpcomingLaunches: true,
      });
    }
    case types.GET_UPCOMING_LAUNCHES_FAILURE: {
      return Object.assign({}, state, {
        upcomingLaunches: [],
        isLoadingUpcomingLaunches: false,
        hasLoadedUpcomingLaunches: false,
      });
    }
    default:
      return state;
  }
}
