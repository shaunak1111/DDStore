import React, { Component } from 'react';

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component1) => {
          AsyncComponent.Component = Component1;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component2 } = this.state;
      if (Component2) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }
  return AsyncComponent;
}
