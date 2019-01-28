import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from '../src/common/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './container/Home/Home.js';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline>
            <PrimarySearchAppBar />
            <Home />
          </CssBaseline>
        </React.Fragment>
      </Provider>
    );
  };
}

export default App;
