import * as React from 'react';
import { Link } from "react-router-dom"
import './style.css';

class SideBar extends React.Component {
  public render() {
    return (
      <div id="sidebar">
        <div className="sidebar-menu">
          <ul className="nav flex-column">
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/">ホーム</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/mac_setting">Mac</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/matter_most">MatterMost</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/esa">ESA</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/editor">エディター</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/git">Git</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/ruby">Ruby</Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link" to="/rails">Rails</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;


