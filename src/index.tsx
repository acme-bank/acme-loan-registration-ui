import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'
import { Routes } from './core';
import registerServiceWorker from './core/service-worker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = createStore(rootReducer)

function Root() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
