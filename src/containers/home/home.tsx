import * as React from 'react';
import { Component, ReactNode } from 'react';

import TopMenu from '../../components/top-menu'
import './home.css';
import logoImage from '../../resources/media/logo-300x100.png';

class Home extends Component {

  public render(): ReactNode {

    const logo = this.logoFragment(logoImage);

    return (
      <div className="container home-container">
        <TopMenu logo={logo} />
        <header className="home-header">
          <h1 className="home-title">Welcome to React</h1>
        </header>
        <p className="home-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }

  private logoFragment = (image: string): JSX.Element => {
    return <img src={image} />;
  }
}

export default Home;
