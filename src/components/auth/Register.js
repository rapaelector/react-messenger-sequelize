import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        rapaelec
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const success = useSelector(state => state.auth.success)
  const errors = useSelector(state => state.auth.error)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    await dispatch({
        type: "DO_REGISTER",
        payload: {
            firstName, lastName, email, password
        }
    })
    if (success) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
  }
  const findError = (fieldName) => {
      if (errors && Array.isArray(errors)) {
        return errors.find((error, index)=> (error.path === fieldName))
      }
      return false; 
  }

  useEffect(async()=>{
    await dispatch({
        type: "DO_PURGE_AUTH_MESSAGE"
    })
  },[])

  return (
    <Container component="main" maxWidth="xs">
        <Router>
          { success != "" &&
            <Redirect to="/login" />
          }
      </Router>
      <CssBaseline />
      <div className={classes.paper}>
      {success && (
        <Alert severity="success"> 
            {success}
        </Alert>)}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={firstName}
                onChange={e=>setFirstName(e.target.value)}
                label="First Name"
                autoFocus
                error={findError("firstName") ? true : false}
                helperText={findError("firstName") ? findError("firstName").message : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={e=>setLastName(e.target.value)}
                autoComplete="lname"
                error={findError("lastName") ? true : false}
                helperText={findError("lastName") ? findError("lastName").message : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                autoComplete="email"
                error={findError("email") ? true : false}
                helperText={findError("email") ? findError("email").message : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
                error={findError("lastName") ? true : false}
                helperText={findError("lastName") ? findError("lastName").message : false}
              />
            </Grid>
            
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerUser}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}