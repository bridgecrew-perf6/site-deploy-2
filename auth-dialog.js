import './styles/auth-dialog.less'
import theme from "./theme";

class AuthDialog {
    constructor(login_dialog, login_input, password_input, submit_button, api) {
        this.login_dialog = login_dialog;
        this.login_input = login_input;
        this.password_input = password_input;
        this.api = api;

        submit_button.onclick = async ev => {
            submit_button.disabled = true;
            submit_button.style.background = theme.dark_color
            submit_button.style.cursor = 'grab'

            try {
                let token = await api.login(this.login_input.value, this.password_input.value)

                submit_button.style.cursor = 'pointer'
                submit_button.style.background = theme.light_color
                submit_button.disabled = false;
            } catch (e) {
                console.error(e)
            }
        }
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
        if(this.isDialogOpened) {
            this.hide()
        } else this.show()

        return this.isDialogOpened;
    }
}

export default AuthDialog