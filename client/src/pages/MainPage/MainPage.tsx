import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import DrawerCustom from '../../components/Drawer/DrawerCustom';
import Map from '../../components/Map';
import { observer } from 'mobx-react-lite';

const MainPage = observer(() => {

    return (
        <>
            <NavBar />
            <Map />
            <DrawerCustom />
        </>
    )
}
)

export default React.memo(MainPage);