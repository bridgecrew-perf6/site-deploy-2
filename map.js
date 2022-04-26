// But it works
// noinspection ES6CheckImport
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import './styles/map.less'
import 'ispinner.css/ispinner.css'
import {renderSpinner} from "./renderer";

mapboxgl.accessToken = `${MAP_KEY}`;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/vladd11/cl2fzdsk000cy17pr0hg5w8bz', // style URL
    center: [50.242441, 53.216556], // starting position [lng, lat]
    zoom: 12 // starting zoom
});
const addressText = document.getElementById('address_text');

const controller = new AbortController()
const signal = controller.signal

let lastDrag;
let shouldUpdate = false;

window.map = map;
map.on('load', () =>
    map.on('move', (e) => {
        if (!shouldUpdate) {
            showRefreshMarker()
            shouldUpdate = true
        }
        lastDrag = performance.now()
    }));

setInterval(async () => {
    if (performance.now() - lastDrag > 2000 && shouldUpdate) {
        shouldUpdate = false;

        let center = map.getCenter()

        // Unfortunately Mapbox places is very poor to determine street & house number
        let result = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${center.lat}&lon=${center.lng}&format=json`)
        result = (await result.json()).address

        console.log(result)

        let street;
        if (result.road == null) {
            street = `${Math.round(center.lat * 1000000) / 1000000}, ${Math.round(center.lng * 1000000) / 1000000}`
        } else if (result.house_number != null) {
            street = `${result.road}, ${result.house_number}`
        } else street = result.road

        localStorage.setItem('selected_street', street);
        localStorage.setItem('coords_lat', center.lat);
        localStorage.setItem('coords_lng', center.lng);

        hideRefreshMarker(street);
    }
}, 500)

function showRefreshMarker() {
    addressText.innerHTML = renderSpinner()
}

function hideRefreshMarker(address) {
    addressText.innerHTML = `<span class="address_text">${address}</span>`
}