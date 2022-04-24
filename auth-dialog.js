import './styles/login-dialog.less'
import theme from "./theme";

class AuthDialog {
    /**
     * Constructor of AuthDialog
     * @param login_dialog Dialog element
     * @param whenAuthFinished Callback that will be called when user successfully log-in into account
     * @param api API class
     */
    constructor(login_dialog, whenAuthFinished, api) {
        this.login_dialog = login_dialog;

        this.login_input = document.getElementById('login_input');
        this.password_input = document.getElementById('password_input');
        this.submit_button = document.getElementById('submit-login-button');
        this.warn_element = document.getElementById('login_dialog_warn');

        this.api = api;

        this.login_dialog.addEventListener("click", async () => {
            this.lockSubmitButton()

            try {
                const result = await api.login(this.login_input.value, this.password_input.value)
                localStorage.setItem("JWT_TOKEN", result.token)

                this.unlockSubmitButton()
                this.setWarnMessage("")
                this.hide()
                whenAuthFinished()
            } catch (e) {
                this.unlockSubmitButton()
                this.setWarnMessage("Неправильный номер телефона и/или пароль")
                console.error(e)
            }
        });
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