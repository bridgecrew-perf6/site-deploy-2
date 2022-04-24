import './styles/header.less'

import AuthDialog from "./auth-dialog";
import theme from "./theme";

import {renderProfileInfo} from "./renderer";

class Header {
    constructor(api, addressOverlay) {
        this.loginText = document.getElementById('login_text')

        let userPhone = localStorage.getItem('USER_PHONE')
        if (userPhone != null) {
            this.loginText.innerHTML = renderProfileInfo(userPhone)
        }

        let login_button = document.getElementById('login_button')
        const authDialog = new AuthDialog(document.getElementById('login_dialog'),
            result => {
                this.loginText.innerHTML = renderProfileInfo(result.phone)
            },
            api)

        login_button.addEventListener("click", () => {
            if (userPhone == null) {
                if (!authDialog.toggle()) {
                    login_button.style.background = theme.primary_color
                } else {
                    login_button.style.background = theme.dark_color
                }
            } else {

            }
        });

        document.getElementById("address").onclick = ev => {
            addressOverlay.showMap()
        }

        document.getElementById("close_map_overlay").onclick = ev => {
            addressOverlay.closeMap()
        }
    }
}

export default Header;