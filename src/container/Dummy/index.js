import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import { DUMMY_SERVICE_REQUESTED } from '../../common/constants/actionType';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import dummyHOC from './DummyHOC';

const mapDispatchToProps = (dispatch) => {
  return {
    loadDummy: () => dispatch({ type: DUMMY_SERVICE_REQUESTED })
  };
};

class Dummy extends PureComponent {
  state = {
    name: ''
  };

  componentDidMount() {
    this.props.loadDummy();
  }

  handleChange = (name) => (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <p> {this.state.name}</p>
        <p>{this.props.two}</p>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            //   className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

export default compose(
  dummyHOC([{ a: 2 }]),
  connect(
    null,
    mapDispatchToProps
  )
)(Dummy);
