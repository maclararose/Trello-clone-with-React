import React, {useState} from 'react';
import {InputBase, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((themes) => ({
  editableTitle:{
    marginLeft: themes.spacing(1),
    display: 'flex',
  },
  editableTitleContainer: {
    flexGrow: 1
  },
  input: {
    margin: themes.spacing(1),
    "&: focus": {
      background: "#ddd",
    }
  }
}));

function Title(){
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return(
    <div>
      {open ?
        (<div className="">
          <InputBase value="To do"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur = {() => setOpen(!open)}
          />
        </div>):
       ( <div className={classes.editableTitleContainer}>
          <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
            To do
          </Typography>
          <MoreHorizIcon />
        </div>)
      }
    </div>
  );
}

export default Title;