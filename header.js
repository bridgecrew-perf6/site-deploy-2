import 'mapbox-gl/dist/mapbox-gl.css'
import './styles/header.less'

import './auth-dialog'
import AuthDialog from "./auth-dialog";
import theme from "./theme";

import {renderProfileInfo} from "./renderer";

class Header {
    constructor(api) {
        this.addressOverlay = document.getElementById("address_overlay");
        this.addressText = document.getElementById("address_text");
        this.loginText = document.getElementById('login_text')

        let userPhone = localStorage.getItem('USER_PHONE')
        if(userPhone != null) {
            this.loginText.innerHTML = renderProfileInfo(userPhone)
        }

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
            result => {
                this.loginText.innerHTML = renderProfileInfo(result.phone)
            },
            api)

        login_button.addEventListener("click", () => {
            if(userPhone == null) {
                if (!authDialog.toggle()) {
                    login_button.style.background = theme.primary_color
                } else {
                    login_button.style.background = theme.dark_color
                }
            } else {

            }
        });
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