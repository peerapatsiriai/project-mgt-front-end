import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import AllInclusive from '@mui/icons-material/AllInclusive';
import Brightness5 from '@mui/icons-material/Brightness5';
import People from '@mui/icons-material/People';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.svg';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import useStyles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function LoginFormV3(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(show => !show);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const { classes, cx } = useStyles();
  const {
    handleSubmit,
    pristine,
    submitting,
    deco,
  } = props;
  return (
    <Paper className={cx(classes.fullWrap, deco && classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/register-v3">
          <Icon className={classes.icon}>arrow_forward</Icon>
          Create new account
        </Button>
      </div>
      <Typography variant="h4" className={classes.title} gutterBottom>
        Sign In
      </Typography>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        Lorem ipsum dolor sit amet
      </Typography>
      <section className={classes.pageFormWrap}>
        <div className={classes.btnArea}>
          <Button variant="outlined" size="small" className={classes.redBtn} type="button">
            <AllInclusive className={cx(classes.leftIcon, classes.iconSmall)} />
            Socmed 1
          </Button>
          <Button variant="outlined" size="small" className={classes.blueBtn} type="button">
            <Brightness5 className={cx(classes.leftIcon, classes.iconSmall)} />
            Socmed 2
          </Button>
          <Button variant="outlined" size="small" className={classes.cyanBtn} type="button">
            <People className={cx(classes.leftIcon, classes.iconSmall)} />
            Socmed 3
          </Button>
        </div>
      </section>
      <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">
        Or login with email
      </Typography>
      <section className={classes.pageFormWrap}>
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder="Your Email"
                label="Your Email"
                required
                validate={[required, email]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <Field
                name="password"
                component={TextFieldRedux}
                type={showPassword ? 'text' : 'password'}
                label="Your Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        size="large">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                required
                validate={required}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div className={classes.optArea}>
            <FormControlLabel className={classes.label} control={<Field name="checkbox" component={CheckboxRedux} />} label="Remember" />
            <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>Forgot Password</Button>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth color="primary" size="large" type="submit">
              Continue
              <ArrowForward className={cx(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
            </Button>
          </div>
        </form>
      </section>
    </Paper>
  );
}

LoginFormV3.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: 'loginForm3',
  enableReinitialize: true,
})(LoginFormV3);

const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.login.usersLogin,
    deco: state.ui.decoration
  }),
)(LoginFormReduxed);

export default FormInit;
