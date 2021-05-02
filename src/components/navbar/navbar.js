import React, { useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const  dispatch = useDispatch()
  const user = useSelector(state=>state.auth.user)
  const users = useSelector(state=>state.user.users)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const doLogout = () => {
    dispatch({
        type: 'DO_LOGOUT'
    })
  }

  const light = useSelector(state => state.theme.light)

  const toggleChecked = () => {
    dispatch({
      type: 'SWITCH_THEME'
    })
  };
  const [userMessage, setUserMessage] = useState('');

  const createMessage = (event, value) => {
    // dispatch create message
    dispatch({
      type: 'DO_CREATE_MESSAGE',
      payload: {
        users : [
          {...user},
          {...value}
        ]
      }
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {user?user.firstName:''}
          </Typography>
          <Autocomplete
            id="users"
            options={users}
            getOptionLabel={(option) => option ? option.firstName : ''}
            style={{ width: 300 }}
            freeSolo
            color="inherite"
            onChange={createMessage}
            renderInput={(params) => <TextField {...params} label="search"  />}
          />
          <FormControlLabel
            control={<Switch color="secondary" size="small" checked={light} onChange={toggleChecked} />}
            label="theme"
            labelPlacement="top"
          />
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={doLogout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
