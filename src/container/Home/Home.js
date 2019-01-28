/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImgMediaCard from '../../common/card';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { DATA_PRODUCTS_REQUESTED, ADD_PRODUCT_TO_CART } from '../../common/constants/actionType';
import { addProductsToCart, deleteFromCart } from '../../store/actions';
import { ADD_BUTTON } from '../../common/constants/general';
import Cart from '../Cart';
import styles from './HomeStyles';

const mapStateToProps = (state) => {
  return { Products: state.Products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch({ type: DATA_PRODUCTS_REQUESTED }),
    addToCart: (product) => dispatch(addProductsToCart(product)),
    deleteFromCart: (product) => dispatch(deleteFromCart(product))
  };
};
const imagePath = process.env.PUBLIC_URL + '/assets/';

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  handleCard = (e) => {
    e.stopPropagation();
  };

  handleAddOrDeleteClick = (data) => {
    if (data.type === ADD_BUTTON) {
      this.props.addToCart(data.props.product);
      this.tempStock++;
    } else {
      this.props.deleteFromCart(data.props.product);
      this.tempStock--;
    }
  };

  render() {
    const { classes, Products } = this.props;
    let numRows = [];
    Products.forEach((item) => {
      numRows.push(
        <Grid key={item.id} item xs={12} md={3}>
          <ImgMediaCard
            click={this.handleCard}
            img={process.env.PUBLIC_URL + '/assets/' + item.images[0] + '.jpg'}
            product={item}
            addDeleteClick={this.handleAddOrDeleteClick}
            maxWidth={500}
          />
        </Grid>
      );
    });

    return (
      <div className={classes.root}>
        <Grid className={classes.gridProperties} container spacing={8}>
          {numRows}
        </Grid>
        <Cart />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  Products: PropTypes.array.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
