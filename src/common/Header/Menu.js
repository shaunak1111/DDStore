import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const DesktopMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  // To avoid prop type warnings in ESLint, return the DMenu constant
  const DMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return DMenu;
};

DesktopMenu.prototype = {
  anchorEl: PropTypes.any.isRequired
};

export default DesktopMenu;
