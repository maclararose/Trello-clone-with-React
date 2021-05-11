import React, {useContext, useState} from 'react';
import {InputBase, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StoreApi from '../../utils/StoreApi';

const useStyle = makeStyles((themes) => ({
  editableTitle:{
    marginLeft: themes.spacing(1),
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: 'flex',
  },
  editableTitleContainer: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    margin: themes.spacing(1),
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&: focus": {
      background: "#ddd",
    }
  }
}));

function Title({ title, listId }){
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const {updateListTitle} = useContext(StoreApi);
  const classes = useStyle();

  const handleOnChange = (element) => {
    setNewTitle(element.target.value);
  };

  const handleBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  }

  return(
    <div>
      {open ?
        (<div className="">
          <InputBase 
            onChange={handleOnChange}
            value={newTitle}
            autoFocus
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur = {handleBlur}
          />
        </div>):
       ( <div className={classes.editableTitleContainer}>
          <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>)
      }
    </div>
  );
}

export default Title;