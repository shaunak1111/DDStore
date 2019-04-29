import React, { Component, PureComponent } from 'react';

const data1 = [
  {
    a: 2
  }
];

const dummyHOC = (data) => (WrappedComponent) => {
  // set the value of a to a*2 to be used in Dummy1 and Dummy2
  class withUser extends Component {
    constructor(props) {
      super(props);
    }
    multiplyA = () => {
      const first = data.slice(0);
      return first[0].a * 2;
    };

    render() {
      const a = this.multiplyA();
      return <WrappedComponent two={a} {...this.props} />;
    }
  }
  return withUser;
};

export default dummyHOC;
