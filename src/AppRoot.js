import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import store from 'store/store';

import App from 'components/App';

import withTracker from 'components/withTracker';

const AppRoot = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={withTracker(App)} />
      </Switch>
    </Router>
  </Provider>
);

export default AppRoot;
