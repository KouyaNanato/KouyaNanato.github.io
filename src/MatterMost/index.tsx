import * as React from 'react';
import './style.css';

import logo from '../logo.svg';

class MatterMost extends React.Component {
  public render() {
    return (
      <div className="Hoge">
        <header className="Hoge-header">
          <img src={logo} className="Hoge-logo" alt="logo" />
          <h1 className="Hoge-title">MatterMost</h1>
        </header>
        <p className="Hoge-intro">
          To get started <code>src/MatterMost</code> and save to reload.
        </p>
        <a href="/">link to AppHome</a>
      </div>
    );
  }
}

export default MatterMost;
