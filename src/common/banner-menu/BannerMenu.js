import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  },
  BannerAlign: {
    justifyContent: 'center'
  }
});

function Banner(props) {
  const { classes } = props;
  const iconClass = `${classes.icon} ${classes.BannerAlign}`;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.BannerAlign}>
          <ThreeSixtyIcon className={iconClass} />
          <ThreeSixtyIcon className={iconClass} />
          <ThreeSixtyIcon className={iconClass} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
