import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';
import mapboxgl from '!mapbox-gl';
import {useEffect, useRef, useState} from "react";

mapboxgl.accessToken = process.env.MAPBOX_KEY;

export const Overlay = ({show, onCloseClicked}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/vladd11/cl24sydee001d14p0x456bdj4',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        map.current.resize();
    }, [show])

    return (<div className="address_overlay" id="address_overlay"
                 style={{display: show === true ? 'flex' : 'none'}}>
        <div className="address_view">
            Ваш адрес:
            <span id="address_text"></span>

            <CloseIcon className="close" onClick={event => onCloseClicked()}></CloseIcon>
        </div>

        <div id="map">
            <PlaceIcon className="center-marker"/>
            <div style={{width: '100%', height: '100%'}}>
                <div ref={mapContainer} className="map-container" style={{height: '100%'}} />
            </div>
        </div>
    </div>)
}