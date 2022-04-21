import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import buttonState from '../../store/buttonState';
import axios from 'axios';

type MarkersType = {
    id: number,
    latitude: number,
    longitude: number,
}

const Map = observer(() => {

    const [markers, setMarkers] = useState<MarkersType[]>();

    useEffect(() => {
        axios.get('http://localhost:5032/api/markers/get')
            .then(response => {
                setMarkers(response.data);
            })
    }, []);

    const onClickHandler = () => {
        buttonState.toggleDrawer();
    }

    return (
        <MapContainer center={[54.72081, 20.50203]} zoom={9}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers?.map(marker =>
                <Marker key={marker.id} position={[marker.latitude, marker.longitude]} eventHandlers={{ click: () => onClickHandler() }}>
                </Marker>
            )}
        </MapContainer>
    )
}
)

export default Map