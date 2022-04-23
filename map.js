import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGQxMSIsImEiOiJja3o0NXE2eTUwNTNzMnFtdHluZWRndGNsIn0.9ZXfdy5x_ii-c7Ur-PYbxQ'

export {mapboxgl}
