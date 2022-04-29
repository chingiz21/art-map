import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import DrawerCustom from '../../components/Drawer/DrawerCustom';
import Map from '../../components/Map';
import { observer } from 'mobx-react-lite';
import DrawerMobile from '../../components/Drawer/DrawerMobile';

const MainPage = observer(() => {

    return (
        <>
            {/* <NavBar /> */}
            <Map />
            <DrawerCustom />
            <DrawerMobile />
        </>
    )
}
)

export default React.memo(MainPage);