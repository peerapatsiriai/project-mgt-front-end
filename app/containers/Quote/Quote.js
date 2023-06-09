import React from 'react';
import { makeStyles } from 'tss-react/mui';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';

const useStyles = makeStyles()(() => ({
  quoteWrap: {
    padding: '0 25',
    margin: 10,
    position: 'relative',
    '&:before': {
      color: blueGrey[100],
      fontSize: '4em',
      lineHeight: '.1em',
      marginRight: '.25em',
      verticalAlign: '-.4em'
    }
  },
  quoteLeft: {
    extend: 'quoteWrap',
    textAlign: 'left',
    borderLeft: '5px solid' + blueGrey[50],
    paddingLeft: 25,
    '&:before': {
      content: 'open-quote',
    }
  },
  quoteRight: {
    extend: 'quoteWrap',
    textAlign: 'right',
    borderRight: '5px solid' + blueGrey[50],
    paddingRight: 25,
    '&:before': {
      content: 'close-quote',
    }
  },
  quoteBody: {
    minHeight: 100,
    marginBottom: 20
  }
}));

function Quote(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    align,
    content,
    footnote,
  } = props;
  return (
    <div
      className={
        cx(
          classes.quoteWrap,
          align === 'right' ? classes.quoteRight : classes.quoteLeft
        )
      }
    >
      <Typography variant="subtitle1" className={classes.quoteBody} gutterBottom>
        {content}
      </Typography>
      <Typography variant="caption">
        {footnote}
      </Typography>
    </div>
  );
}

Quote.propTypes = {
  align: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,

};

export default Quote;
