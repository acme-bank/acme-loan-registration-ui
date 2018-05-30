import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/header'

import './index.css';

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
    <MuiThemeProvider theme={theme}>
      <Header />
      <Routes />
    </MuiThemeProvider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
