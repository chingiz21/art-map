import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Circle, LayerGroup, LayersControl, MapContainer, Marker, Pane, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import buttonState from '../../store/buttonState';
import drawerInfo from '../../store/drawerInfo';
import axios from 'axios';
import NavBar from '../NavBar';

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

    const onClickHandler = (id: number) => {
        axios.get(`http://localhost:5032/api/data/one?id=${id}`)
            .then(response => {
                drawerInfo.setArtObject(response.data);
            })

        buttonState.toggleDrawer();
    }

    return (
        <MapContainer center={[54.72081, 20.50203]} zoom={9}>

            <LayersControl position='topright'>
                <LayersControl.BaseLayer checked name="Basic Map">
                    <TileLayer
                        attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name="Topo Map">
                    <TileLayer
                        attribution='Map data: &amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &amp;copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay checked name='Достопримечательности'>
                    <LayerGroup>
                        {markers?.map(marker =>
                            <Marker key={marker.id} position={[marker.latitude, marker.longitude]} eventHandlers={{ click: () => onClickHandler(marker.id) }}>
                            </Marker>
                        )}
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>

        </MapContainer>
    )
}
)

export default Map