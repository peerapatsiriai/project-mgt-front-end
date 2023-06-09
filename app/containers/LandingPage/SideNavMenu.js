import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.svg';
import useStyles from '../Sidebar/sidebar-jss';

function MenuContent(props) {
  const { classes, cx } = useStyles();
  const {
    menuList,
    gotoSlide,
    active
  } = props;

  const getMenus = menuArray => menuArray.map((item, index) => (
    <ListItem
      key={index.toString()}
      button
      className={cx(classes.headCapital, active === item.id && classes.active)}
      to={item.url}
      onClick={() => gotoSlide(item.id)}
    >
      <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
    </ListItem>
  ));

  return (
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <div className={classes.brandBig}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
      </div>
      <div className={cx(classes.menuContainer, classes.landingNav, classes.rounded)}>
        <List className={classes.dense} component="nav">
          {getMenus(menuList)}
        </List>
        <Typography variant="caption" className={classes.copyright}>
          &copy; 2022 Dandelion Designs
          <br />
          All Right Reserved
        </Typography>
      </div>
    </div>
  );
}

MenuContent.propTypes = {
  active: PropTypes.number.isRequired,
  menuList: PropTypes.array.isRequired,
  gotoSlide: PropTypes.func.isRequired
};

MenuContent.defaultProps = {
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

const SideNavMenu = MenuContent;

export default SideNavMenu;
