import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import UpcomingLaunchesContainer from 'containers/UpcomingLaunchesContainer';
import PastLaunchesContainer from 'containers/PastLaunchesContainer';

import AppMenu from 'components/AppMenu';

import { APP_VERSION } from 'configs/constants';

import './App.css';

const {
  Header, Content, Footer,
} = Layout;

const App = (props) => {
  const { match, history } = props;

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="logo" />
        <AppMenu history={history} />
      </Header>
      <Content className="app-content">
        <Switch>
          <Route
            exact
            path={match.path}
            component={UpcomingLaunchesContainer}
          />
          <Route
            path={`${match.path}past`}
            component={PastLaunchesContainer}
          />
          <Route path="*" render={() => (<Redirect to="/" />)} />
        </Switch>
      </Content>
      <Footer className="app-footer">
        All Rights Reserved ©
        &nbsp;
        {new Date().getFullYear()}
        &nbsp;
        <a href="https://github.com/murtazazaidi">
          Murtaza Zaidi
        </a>
        <span>
          version:&nbsp;
          {APP_VERSION}
        </span>
      </Footer>
    </Layout>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    go: PropTypes.func,
  }).isRequired,
};

export default App;
