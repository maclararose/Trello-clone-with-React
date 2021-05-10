import React from 'react';
import {CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../Title/Title';
import Card from '../Card/Card.js';
import InputContainer from '../Input/InputContainer';

const useStyle = makeStyles((themes) => ({
  root:{
    width: "300px",
    backgroundColor:"#DDD",
    marginLeft: themes.spacing(1),
    
  },
}));

function List({ list }){
  const classes = useStyle();
  return(
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title}/>
        {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <InputContainer listId={list.id} type="card"/>
      </Paper>
    </div>
  );
}

export default List;