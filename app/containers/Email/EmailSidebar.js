import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import EmailMenu from './EmailMenu';
import useStyles from './email-jss';

function EmailSidebar(props) {
  const { classes } = useStyles();
  const {
    compose,
    goto,
    selected,
    handleDrawerToggle,
    mobileOpen
  } = props;
  return (
    <Fragment>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <EmailMenu compose={compose} goto={goto} onClose={handleDrawerToggle} selected={selected} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          className={classes.sidebar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <EmailMenu compose={compose} goto={goto} selected={selected} />
        </Drawer>
      </Hidden>
    </Fragment>
  );
}

EmailSidebar.propTypes = {
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default EmailSidebar;
