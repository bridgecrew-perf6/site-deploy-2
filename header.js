import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/header.less'

import './auth-dialog'
import(/* webpackMode: "eager" */ "./map.js").then(
    module => {
        const mapboxgl = module.mapboxgl;

        let map;

        let addressText = document.getElementById("address_text");
        let addressOverlay = document.getElementById("address_overlay");

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

    }
);