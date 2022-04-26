import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/map.less'

class AddressOverlay {
    constructor(addressOverlay, addressText) {
        this.addressOverlay = addressOverlay;
        this.addressText = addressText;

        this.promise = new Promise(
            (resolve, reject) => {
                import("./map.js").then(
                    module => {
                        this.mapboxgl = module.mapboxgl;
                        resolve(this.mapboxgl);
                    }
                ).catch(() => reject());
            }
        );
    }

    closeMap() {
        this.addressOverlay.style.display = 'none';
    }

    showMap() {
        if (this.mapboxgl == null) {
            this.promise.then(() => this.showMap())
        }

        this.addressOverlay.style.display = 'flex';
        if (!this.map) {
            this.map = new this.mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
        }
    }
}

export default AddressOverlay;
