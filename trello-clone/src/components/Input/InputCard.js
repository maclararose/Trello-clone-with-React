import React, { useContext, useState } from 'react';
import { Button, IconButton, InputBase, Paper} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';
import StoreApi from '../../utils/StoreApi';

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2)
  },
  btnConfirm: {
    background: 'green',
    color: '#fff',
    "&:hover" :{
      background: fade("#5AAC44", 0.75),
    }
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

function InputCard({setOpen, listId, type}){
  const classes = useStyle();
  const {addMoreCard, addMoreList} = useContext(StoreApi);
  const [title, setTitle] = useState('');

  const handleOnChange = (element) => {
    setTitle(element.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card"){
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return(
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
          onChange={handleOnChange} 
          multiline 
          onBlur={() => setOpen(false)}
          fullWidth 
          inputProps= {{
            className: classes.input,
          }}
          value={title}
          placeholder={type==='card' ? "Enter a title of this card..." : "Add a title for the list"}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add a new list"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;