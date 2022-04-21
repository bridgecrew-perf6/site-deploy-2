import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";

import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/header.less'

import './auth-dialog'
import {overlay_toggle} from './cart-overlay'
import theme from "./theme";

let map;

let addressText = document.getElementById("address_text");
let addressOverlay = document.getElementById("address_overlay");

mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default
mapboxgl.accessToken = `${MAP_KEY}`

document.getElementById("address").onclick = ev => {
    addressOverlay.style.display = 'flex';
    if (!map) {
        map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    }

    console.log('Address button clicked')
};

document.getElementById("close_map_overlay").onclick = ev => {
    addressOverlay.style.display = 'none';
}


let cart_header_button = document.getElementById('cart_button');
cart_header_button.onclick = ev => {
    if (overlay_toggle()) {
        cart_header_button.style.background = theme.dark_color
    } else cart_header_button.style.background = theme.primary_color
}