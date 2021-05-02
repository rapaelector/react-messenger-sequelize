import logo from './logo.svg';
import './App.css';
import {Button, Paper, Typography} from '@material-ui/core'
import Space  from "./components/space"
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import React from 'react';
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import darkTheme from './themes/darkTheme'
import theme from './themes/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  const token = useSelector(state=>state.auth.token)
  const dispatch = useDispatch();
  const light = useSelector(state => state.theme.light)
  const history = createBrowserHistory();
  if (token) {
    const uId = jwt_decode(token).id;

    dispatch({
      type: 'DO_CHECK_USER',
      payload: {
        uid : uId,
        token: token
      }
    })
    // get user by token 
    // match the id with uId
  }
  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          { history.location.pathname != "/register" && !token &&
            <Redirect from="/" to="/login"/>
          }
          { token &&
            <Redirect from="/login" to="/" />
          }
        </ThemeProvider>
        <Switch>
          <Route path="/" exact children={<Space/>} />
          <Route path="/login" exact children={<Login/>} />
          <Route path="/register" exact children={<Register/>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
