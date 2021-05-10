import React, {useState} from 'react';
import {InputBase, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

function Title({ title }){
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return(
    <div>
      {open ?
        (<div className="">
          <InputBase value={title}
            autoFocus
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur = {() => setOpen(!open)}
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