import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/header.less'

import './auth-dialog'
import AuthDialog from "./auth-dialog";
import theme from "./theme";

class Header {
    constructor(api, addressText, addressOverlay) {
        this.addressOverlay = addressOverlay;

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

        let login_button = document.getElementById('login_button')
        const authDialog = new AuthDialog(document.getElementById('login_dialog'),
            document.getElementById('login_input'),
            document.getElementById('password_input'),
            document.getElementById('submit-login-button'),
            api)

        login_button.onclick = ev => {
            if (!authDialog.toggle()) {
                login_button.style.background = theme.primary_color
            } else {
                login_button.style.background = theme.dark_color
            }
        }
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

export default Header;