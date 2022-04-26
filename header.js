import './styles/header.less'

import AuthDialog from "./auth-dialog";
import theme from "./theme";

import {renderProfileInfo} from "./renderer";

class Header {
    constructor(api) {
        this.loginText = document.getElementById('login_text')
        this.addressText = document.getElementById('your_address')

        let current_address =localStorage.getItem('selected_street')
        if(current_address != null) {
            this.addressText.innerHTML = current_address
        }

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
    }
}

export default Header;