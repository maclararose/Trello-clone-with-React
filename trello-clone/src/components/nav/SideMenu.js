import { Drawer, makeStyles } from '@material-ui/core';
import React from 'react';
import TopBar from '../TopBar/TopBar';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '400px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-arround',
    margin: theme.spacing(2),

  },
  box:{
    width: '45%',
    height: '90px',
    backgroundColor: 'blue',
    borderRadius: '5px',
  }
}));

function SideMenu({setOpenSideMenu, openSideMenu}){
  const classes = useStyles();
  //const [openColor, setOpenColor] = useState(false);
  //const [images, setImage] = useState([]);

  return(
    <div>
      <Drawer open={openSideMenu} anchor={"right"} onClose={() => setOpenSideMenu(false)}>
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div className={classes.box} style={{
              backgroundImage: "url(https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/tyfg7tk7aaf0m4dg1n5j)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover"
            }}>

            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideMenu;