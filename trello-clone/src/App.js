import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import InputContainer from './components/Input/InputContainer';
import List from './components/List/List';
import Store from './utils/Store';
import StoreApi from './utils/StoreApi';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: 'purple',
  }
}));

function App() {
  const [data, setData] = useState(Store);
  const addMoreCard = (title, listId) => {
    const newCardId =uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      }
    }
    setData(newState);
  };

  const classes = useStyle();

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: []
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists:{
        ...data.lists,
        [newListId]: newList,
      },
    };

    setData(newState);
  }

  return (
    <StoreApi.Provider value={{addMoreCard, addMoreList}}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];

          return <List list={list} key={listId}/>
        })}
        <InputContainer type="list"/>
      </div>
    </StoreApi.Provider>
  );
}

export default App;
