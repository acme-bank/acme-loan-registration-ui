import * as React from 'react';

import Menu from '../../components/menu'
import './home.css';
import logo2 from '../../resources/media/logo.svg';
import logo from '../../resources/media/logo-300x100.png';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <Menu logo={<img src={logo} />} />
        <header className="home-header">
          <img src={logo2} className="home-logo" alt="logo" />
          <h1 className="home-title">Welcome to React</h1>
        </header>
        <p className="home-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
