import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import useStyles from './JongraiStyle-jss';

function JongRaiBlock(props) {
  const { classes, cx } = useStyles();
  const {
    children,
    whiteBg,
    noMargin,
    colorMode,
    overflowX,
  } = props;
  return (
    <div>
      <Paper className={cx(classes.root, noMargin && classes.noMargin, colorMode && classes.colorMode)} elevation={0}>
        <section className={cx(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX)}>
          {children}
        </section>
      </Paper>
    </div>
  );
}

JongRaiBlock.propTypes = {

  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  whiteBg: PropTypes.bool,
  colorMode: PropTypes.bool,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

JongRaiBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false,
  icon: 'ion-ios-bookmark-outline'
};

export default JongRaiBlock;
