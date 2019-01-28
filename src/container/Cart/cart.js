/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { updateCartClicked, updateCartTotalPrice } from '../../store/actions';
import styles from './cartStyles';
import { VOUCHER_FIVE, VOUCHER_TEN, VOUCHER_FIFTEEN } from '../../common/constants/general';

const mapStateToProps = (state) => {
  return {
    cartList: state.CartProducts,
    cartClicked: state.cartClicked,
    cartTotal: state.cartTotal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartClicked: () => dispatch(updateCartClicked()),
    updateCartTotal: (totalPrice) => dispatch(updateCartTotalPrice({ cartTotal: totalPrice }))
  };
};

class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    cartTotal: 0,
    cartItems: 0,
    couponValue: '',
    discountCoupons: {},
    invalidCoupon: false,
    disableCouponBtn: true
  };

  componentDidMount() {
    const { cartList } = this.props;
    if (!cartList.length) {
      this.setState({
        disableCouponBtn: true
      });
    }
    // assigning discount vouchers instead of assigning the object literal way,
    // keeps the voucher code in sync with constant/general.js file
    this.state.discountCoupons[VOUCHER_FIVE] = 5;
    this.state.discountCoupons[VOUCHER_TEN] = 10;
    this.state.discountCoupons[VOUCHER_FIFTEEN] = 15;
  }

  componentDidUpdate(prevProps) {
    this.setState({
      cartTotal: prevProps.cartTotal
    });
    // Disable or enable coupon button based on items added in cart
    if (!this.props.cartList.length) {
      this.setState({
        disableCouponBtn: true
      });
    } else if (this.props.cartList.length !== prevProps.cartList.length) {
      this.setState({
        disableCouponBtn: false
      });
    }
  }

  handleClose = () => {
    this.props.updateCartClicked(false);
  };

  // function currying to get name and event
  handleCouponChange = (name) => (e) => {
    const {
      target: { value }
    } = e;
    this.setState({
      [name]: value,
      disableCouponBtn: false,
      invalidCoupon: false
    });
    this.props.updateCartTotal(this.state.cartTotal);
  };

  handleCouponLogic(voucherName) {
    const { discountCoupons } = this.state;
    const { updateCartTotal, cartList, cartTotal } = this.props;
    this.setState({
      invalidCoupon: true
    });
    if (voucherName === VOUCHER_FIVE) {
      updateCartTotal(cartTotal - discountCoupons[VOUCHER_FIVE]);
      this.setState({
        invalidCoupon: false
      });
    } else if (cartTotal > 50 && voucherName === VOUCHER_TEN) {
      updateCartTotal(cartTotal - discountCoupons[VOUCHER_TEN]);
      this.setState({
        invalidCoupon: false
      });
    } else if (voucherName === VOUCHER_FIFTEEN && cartTotal > 75) {
      cartList.forEach((items) => {
        if (items.category.toUpperCase().indexOf('FOOTWEAR') !== -1) {
          updateCartTotal(cartTotal - discountCoupons[VOUCHER_FIFTEEN]);
          this.setState({
            invalidCoupon: false
          });
        }
      });
    }
  }

  handleCouponClick = () => {
    if (Object.keys(this.state.discountCoupons).includes(this.state.couponValue.toUpperCase())) {
      this.setState({
        disableCouponBtn: true
      });
      this.handleCouponLogic(this.state.couponValue.toUpperCase());
    } else {
      this.setState({
        invalidCoupon: true
      });
    }
  };

  calculateCartAmount = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.discountedPrice));
    return totalPrice;
  };

  consolidateCart = (cartList) => {
    return cartList.reduce((acc, item) => {
      (acc[item['id']] = acc[item['id']] || []).push(item);
      return acc;
    }, {});
  };

  render() {
    const { classes, cartClicked, cartList, cartTotal } = this.props;
    const consolidatedCartItems = this.consolidateCart(cartList);
    const { disableCouponBtn, invalidCoupon } = this.state;
    let listItems = [];
    Object.keys(consolidatedCartItems).forEach((key) => {
      const cartItem = consolidatedCartItems[key][0];
      const quantity = `quantity :  ${consolidatedCartItems[key].length}`;
      listItems.push(
        <ListItem className={classes.list} key={key}>
          <Avatar
            className={classes.avatar}
            src={process.env.PUBLIC_URL + '/assets/' + cartItem.images[0] + '.jpg'}
          />
          <ListItemText
            classes={{ primary: classes.listItem, secondary: classes.listItem }}
            primary={cartItem.productName}
            secondary={quantity}
          />
        </ListItem>
      );
    });
    const cartContent = (
      <Modal open={cartClicked} onClose={this.handleClose}>
        <div className={classes.modalContainer}>
          <List>
            {listItems}
            <Typography className={classes.totalPrice} variant="h4" color="default">
              Total Price - &#163;{cartTotal}
            </Typography>
          </List>
          <Grid className={classes.gridProperties} container spacing={8}>
            <Grid item xs={12} md={6}>
              <TextField
                value={this.state.couponValue}
                label="Apply Coupon Code"
                onChange={this.handleCouponChange('couponValue')}
                margin="normal"
              />
            </Grid>
            <Grid className={classes.gridButton} item xs={12} md={6}>
              <Button
                onClick={this.handleCouponClick}
                disabled={disableCouponBtn || cartTotal === 0}
                variant="contained"
                className={classes.button}
              >
                Apply Voucher
              </Button>
            </Grid>
            <Grid item xs={12}>
              {invalidCoupon ? (
                <Typography variant="h5" color="error">
                  Invalid Voucher!!!!! or the Voucher is not Applicable
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </Modal>
    );
    return cartContent;
  }
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  cartList: PropTypes.array.isRequired,
  cartClicked: PropTypes.bool.isRequired,
  updateCartClicked: PropTypes.func.isRequired,
  updateCartTotal: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Cart);
