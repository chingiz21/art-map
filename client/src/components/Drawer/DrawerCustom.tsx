import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import './DrawerCustom.css';
import { observer } from 'mobx-react-lite';
import buttonState from '../../store/buttonState';


type DrawerType = {
  children: React.ReactNode
}

const DrawerCustom = observer(({ children }: DrawerType) => {

  console.log('drawer');
  return (
    <>
      
      <Drawer
        anchor='left'
        open={buttonState.drawerState}
        onClose={() => buttonState.toggleDrawer()}
        PaperProps={{ sx: { width: 450 } }}
      >
        {children}
      </Drawer>
    </>
  )
}
)

export default React.memo(DrawerCustom);