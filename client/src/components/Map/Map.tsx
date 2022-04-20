import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import buttonState from '../../store/buttonState';

const Map = observer( () => {

    const onClickHandler = () => {
        buttonState.toggleDrawer();
    }

    return (
        <MapContainer center={[54.72081, 20.50203]} zoom={9}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[54.70068, 20.74323]} eventHandlers={{ click: () => onClickHandler() }}>
                {/* <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
            </Marker>
            <Marker position={[54.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.62507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.63507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.64507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.65507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.67507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.68507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[54.69507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[53.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[55.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[56.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[52.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[51.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
            <Marker position={[50.66507 , 20.43055 ]} eventHandlers={{ click: () => onClickHandler() }}>
            </Marker>
        </MapContainer>
    )
}
)

export default Map