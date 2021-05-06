import React from 'react';
import {CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../Title/Title';

const useStyle = makeStyles((themes) => ({
  root:{
    width: "300px",
    backgroundColor:"#DDD",
    marginLeft: themes.spacing(1),
    
  },
}));

function List(){
  const classes = useStyle();
  return(
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
      </Paper>
    </div>
  );
}

export default List;