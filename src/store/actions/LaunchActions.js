import { getPastLaunches, getUpcomingLaunches } from 'sources/LaunchSource';
import * as types from 'constants/LaunchTypes';

export const getPastLaunchesInit = () => ({
  type: types.GET_PAST_LAUNCHES_INIT,
});

export const getPastLaunchesSuccess = data => ({
  type: types.GET_PAST_LAUNCHES_SUCCESS,
  data,
});

export const getPastLaunchesFailure = data => ({
  type: types.GET_PAST_LAUNCHES_FAILURE,
  data,
});

export const getUpcomingLaunchesInit = () => ({
  type: types.GET_UPCOMING_LAUNCHES_INIT,
});

export const getUpcomingLaunchesSuccess = data => ({
  type: types.GET_UPCOMING_LAUNCHES_SUCCESS,
  data,
});

export const getUpcomingLaunchesFailure = data => ({
  type: types.GET_UPCOMING_LAUNCHES_FAILURE,
  data,
});

export const getPastLaunchesAction = () => getPastLaunches();

export const getUpcomingLaunchesAction = () => getUpcomingLaunches();
