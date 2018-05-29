import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import MainMenu from './components/header'

import './index.css';

const theme = createMuiTheme();

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainMenu />
      <Routes />
    </MuiThemeProvider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
