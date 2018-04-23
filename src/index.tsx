import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Editor from './Editor';
import Esa from './Esa';
import Git from './Git';
import MacSetting from './MacSetting';
import MatterMost from './MatterMost';
import Rails from './Rails';
import Ruby from './Ruby';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SideBar from './SideBar';

import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

// import Index from "./containers/Index"
import scheduleReducers, { initialState } from "./reducers"
// import "./style"

// ストア
export const store = createStore(
  scheduleReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
)

// フロント側のルーティング
const Routes = () => (
  <React.Fragment>
    <SideBar />
    <div id="schedule" >
      <Switch>
        <Route exact={true} path="/" component={App}/>
        <Route exact={true} path="/editor" component={Editor}/>
        <Route exact={true} path="/esa" component={Esa}/>
        <Route exact={true} path="/git" component={Git}/>
        <Route exact={true} path="/mac_setting" component={MacSetting}/>
        <Route exact={true} path="/matter_most" component={MatterMost}/>
        <Route exact={true} path="/rails" component={Rails}/>
        <Route exact={true} path="/ruby" component={Ruby}/>
      </Switch>
    </div>
  </React.Fragment>
)

ReactDOM.render(
    <Provider store={store}>
      <Router >
        <Routes />
      </Router>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
