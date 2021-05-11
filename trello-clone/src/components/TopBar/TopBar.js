import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  AppBar:{
    background: 'None',
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    color: '#fff',
    background: '#000'
  }
}));

function TopBar({setOpenSideMenu}){
  const classes = useStyle();

  return(
    <div>
      <AppBar position="static" className={classes.AppBar} elevation={0}>
        <Toolbar>
          <h1 className={classes.title}>Trello Clone</h1>
          <Button className={classes.btn} onClick={() => setOpenSideMenu(true)}>
            Change background
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;