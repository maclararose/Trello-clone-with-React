import React from 'react';
import {CssBaseline, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../Title/Title';
import Card from '../Card/Card.js';
import InputContainer from '../Input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((themes) => ({
  root:{
    minWidth: "300px",
    backgroundColor:"#DDD",
    marginLeft: themes.spacing(1),
    
  },
  cardContainer: {
    marginTop: themes.spacing(4)
  }
}));

function List({ list }){
  const classes = useStyle();
  return(
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} listId={list.id}/>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
              {list.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputContainer listId={list.id} type="card"/>
      </Paper>
    </div>
  );
}

export default List;