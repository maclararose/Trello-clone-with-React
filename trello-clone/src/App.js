import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/nav/Navegation';

const useStyle = makeStyles((theme) => ({
  root: {
    background: 'purple'
  }
}));

function App(){
  const classes = useStyle();

  return(
  <div className={classes.root}>
    <Navigation />
    <Wrapper />
  </div>
  );
}

export default App;