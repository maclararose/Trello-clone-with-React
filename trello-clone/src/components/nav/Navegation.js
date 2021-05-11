import React, { useState } from 'react';
import TopBar from '../TopBar/TopBar';
import SideMenu from './SideMenu';

function Navigation(){
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return(
    <div>
      <TopBar setOpenSideMenu={setOpenSideMenu}/>
      <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu}/>
    </div>
  );
}

export default Navigation;