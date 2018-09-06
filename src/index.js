import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import AppRoot from 'AppRoot';

import { GA_API, APP_VERSION } from 'configs/constants';

import registerServiceWorker from 'registerServiceWorker';

// If there is no analytics key in build then the whole process is bypassed.
if (GA_API) {
  ReactGA.initialize(GA_API, {
    gaOptions: {
      appVersion: APP_VERSION,
    },
  });
}


ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();
