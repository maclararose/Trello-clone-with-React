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

  }
}));

function Title(){
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return(
    <div>
      {open ?
        (<div>
          <InputBase value="To do"/>
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