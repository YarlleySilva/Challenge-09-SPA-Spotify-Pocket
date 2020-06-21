import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { App } from './containers';

import './styles/globalStyles.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
