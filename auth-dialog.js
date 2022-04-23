import './styles/login-dialog.less'
import theme from "./theme";

class AuthDialog {
    constructor(login_dialog, login_input, password_input, submit_button, warn_element, api) {
        this.login_dialog = login_dialog;
        this.login_input = login_input;
        this.password_input = password_input;
        this.submit_button = submit_button;
        this.warn_element = warn_element;
        this.api = api;

        this.submit_button.onclick = async ev => {
            this.lockSubmitButton()

            try {
                let token = await api.login(this.login_input.value, this.password_input.value)

                this.unlockSubmitButton()
            } catch (e) {
                this.unlockSubmitButton()
                this.setWarnMessage("Неправильный номер телефона и/или пароль")
                console.error(e)
            }
        }
    }

    setWarnMessage(message) {
        this.warn_element.innerText = message
    }

    unlockSubmitButton() {
        this.submit_button.style.cursor = 'pointer'
        this.submit_button.style.background = theme.light_color
        this.submit_button.disabled = false;
    }

    lockSubmitButton() {
        this.submit_button.disabled = true;
        this.submit_button.style.background = theme.dark_color
        this.submit_button.style.cursor = 'grab'
    }

    hide() {
        this.login_dialog.style.display = 'none'
        this.isDialogOpened = false;
    }

    show() {
        this.login_dialog.style.display = 'flex'
        this.isDialogOpened = true;
    }

    /**
     * Opens the dialog if it's closed, closes if it's opened.
     * @returns {boolean|*} true if dialog is opened, false if it's hidden
     */
    toggle() {
        if (this.isDialogOpened) {
            this.hide()
        } else this.show()

        return this.isDialogOpened;
    }
}

export default AuthDialog