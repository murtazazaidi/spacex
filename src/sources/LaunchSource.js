import axios from 'axios';
import { notification } from 'antd';

import {
  getPastLaunchesInit,
  getPastLaunchesSuccess,
  getPastLaunchesFailure,
  getUpcomingLaunchesInit,
  getUpcomingLaunchesSuccess,
  getUpcomingLaunchesFailure,
} from 'store/actions/LaunchActions';

import { PAST_LAUNCHES_URL, UPCOMING_LAUNCHES_URL } from 'configs/constants';

import { normalizeLaunches } from 'normalizers/launchNormalizers';

const status = {
  OK: 200,
};

const messages = {
  ERROR_TITLE: 'Loading Error',
  PAST_FAIL: 'Failed to load past launches',
  UPCOMING_FAIL: 'Failed to load upcoming launches',
};

export const getPastLaunches = () => (dispatch) => {
  dispatch(getPastLaunchesInit());
  axios
    .get(PAST_LAUNCHES_URL)
    .then((response) => {
      if (response.status === status.OK) {
        const launchesNormalized = normalizeLaunches(response.data);
        dispatch(getPastLaunchesSuccess(launchesNormalized));
      } else {
        notification.error({
          message: messages.ERROR_TITLE,
          description: messages.PAST_FAIL,
        });
        dispatch(getPastLaunchesFailure());
      }
    })
    .catch(() => {
      notification.error({
        message: messages.ERROR_TITLE,
        description: messages.PAST_FAIL,
      });
      dispatch(getPastLaunchesFailure());
    });
};

export const getUpcomingLaunches = () => (dispatch) => {
  dispatch(getUpcomingLaunchesInit());
  axios
    .get(UPCOMING_LAUNCHES_URL)
    .then((response) => {
      if (response.status === status.OK) {
        const launchesNormalized = normalizeLaunches(response.data);
        dispatch(getUpcomingLaunchesSuccess(launchesNormalized));
      } else {
        notification.error({
          message: messages.ERROR_TITLE,
          description: messages.UPCOMING_FAIL,
        });
        dispatch(getUpcomingLaunchesFailure());
      }
    })
    .catch(() => {
      notification.error({
        message: messages.ERROR_TITLE,
        description: messages.UPCOMING_FAIL,
      });
      dispatch(getUpcomingLaunchesFailure());
    });
};
