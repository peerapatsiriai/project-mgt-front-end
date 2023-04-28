import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import link from 'dan-api/ui/link';
import useStyles from './landingStyle-jss';
import BannerParallax from './BannerParallax';

function Banner(props) {
  const { slideMode } = props;
  const { classes, cx } = useStyles();

  const gradient = useSelector(state => state.ui.gradient);
  return (
    <div
      className={
        cx(
          classes.banner,
          gradient ? classes.gradient : classes.solid,
          slideMode ? classes.out : classes.fit
        )
      }
    >
      {!slideMode && <BannerParallax />}
      <div className={!slideMode ? classes.container : ''}>
        <Typography component="h2" variant="h2" gutterBottom>Dandelion Pro</Typography>
        <Typography component="p" variant="h5" gutterBottom>A React.js Website Template </Typography>
        <div className={classes.btnArea}>
          <Button
            size="large"
            variant="outlined"
            className={cx(classes.button, classes.btnLight)}
            href={link.buy}
            target="_blank"
          >
            Buy Now
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to={link.dashboard}
          >
            See Demo
          </Button>
        </div>
        <div className={classes.previewApp}>
          <Hidden mdDown>
            <div className={cx(classes.m2, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crypto.jpg" alt="crm dashboard" />
            </div>
          </Hidden>
          <div className={cx(classes.m1, classes.screen)}>
            <img src="/images/screen/personal.jpg" alt="personal dashboard" />
          </div>
          <Hidden mdDown>
            <div className={cx(classes.m3, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crm.jpg" alt="crypto dashboard" />
            </div>
          </Hidden>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};

const MemoedBanner = memo(Banner);
export default MemoedBanner;
