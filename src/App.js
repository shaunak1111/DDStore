import React, { Component } from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux';
import store from './store';

import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrimarySearchAppBar from '../src/common/Header';
// import Home from './container/Home/Home.js';
import createBrowserHistory from 'history/createBrowserHistory';

import Loadable from 'react-loadable';
import Loading from '../src/common/loader';

const LoadableHomeComponent = Loadable({
  loader: () => import('./container/Home/Home.js'),
  loading: Loading
});

const history = createBrowserHistory();

export default class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline>
            <PrimarySearchAppBar />
            <Router history={history}>
              <section className="content">
                <Switch>
                  <Route exact path="/home" component={LoadableHomeComponent} />
                </Switch>
              </section>
            </Router>
          </CssBaseline>
        </React.Fragment>
      </Provider>
    );
  };
}
