import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../src/Home';
import BannerMenu from '../src/common/banner-menu';

class App extends Component {
  render = () => {
    return (
      <React.Fragment>
        <CssBaseline>
          <PrimarySearchAppBar />
          <BannerMenu />
          <Home />
        </CssBaseline>
      </React.Fragment>
      // <div className="App">
      //   <header className="App-header">
      //     {/* <PrimarySearchAppBar/> */}
      //   </header>
      // </div>
    );
  };
}

export default App;
