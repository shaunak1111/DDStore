import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import MobileMenu from './MobileMenu';
import DesktopMenu from './Menu';

import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { updateCartClicked } from '../../store/actions';

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

const mapStateToProps = (state) => {
  return { cartProducts: state.CartProducts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartClicked: (cartClicked) => dispatch(updateCartClicked(cartClicked))
  };
};

class PrimarySearchAppBar extends React.PureComponent {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    cartClicked: false
  };

  constructor(props) {
    super(props);
  }

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleCartClick = () => {
    this.setState((prevState) => {
      this.state.cartClicked = !prevState.cartClicked;
    });
    this.props.updateCartClicked(this.state.cartClicked);
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, cartProducts } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Deloitte Digital Store
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton onClick={this.handleCartClick} color="inherit">
                <Badge badgeContent={cartProducts.length} color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={this.handleMobileMenuClose}
          handleCartClick={this.handleCartClick}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          cartNumberOfItems={cartProducts.length}
        />
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  updateCartClicked: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PrimarySearchAppBar);
