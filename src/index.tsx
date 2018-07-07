import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import rootReducer from './reducers'
import Routes from './routes';
import registerServiceWorker from './modules/serviceworker';

import './index.css';

const store = createStore(rootReducer)

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#000000',
      light: '#515455',
      main: '#292b2c',
    },
    secondary: {
      contrastText: '#000',
      dark: '#ba000d',
      light: '#ff7961',
      main: '#f44336',
    },
  },
});

function Root() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
