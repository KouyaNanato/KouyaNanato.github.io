import * as React from 'react';
import './style.css';

import logo from '../logo.svg';

class MacSetting extends React.Component {
  public render() {
    return (
      <div className="Hoge">
        <header className="Hoge-header">
          <img src={logo} className="Hoge-logo" alt="logo" />
          <h1 className="Hoge-title">MacSetting</h1>
        </header>
        <p className="Hoge-intro">
          To get started <code>src/MacSetting</code> and save to reload.
        </p>
        <a href="/">link to AppHome</a>
      </div>
    );
  }
}

export default MacSetting;
