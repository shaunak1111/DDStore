import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

const MobileMenu = ({
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleCartClick,
  mobileMoreAnchorEl,
  cartNumberOfItems
}) => (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem onClick={handleCartClick}>
      <IconButton color="inherit">
        <Badge badgeContent={cartNumberOfItems} color="secondary">
          <AddShoppingCart />
        </Badge>
      </IconButton>
    </MenuItem>
  </Menu>
);

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleMobileMenuClose: PropTypes.func.isRequired,
  handleCartClick: PropTypes.func.isRequired,
  cartNumberOfItems: PropTypes.number.isRequired,
  mobileMoreAnchorEl: PropTypes.any,
  handleCartClick: PropTypes.func.isRequired
};

export default MobileMenu;
