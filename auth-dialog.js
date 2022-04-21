import './styles/auth-dialog.less'
import theme from "./theme";

let submit = document.getElementById('submit-login-button')
let button = document.getElementById('login_button')
let login_dialog = document.getElementById('login_dialog')

let isDialogOpened = false;

button.onclick = ev => {
    if (isDialogOpened) {
        button.style.background = theme.primary_color
        login_dialog.style.display = 'none'
        isDialogOpened = false
    } else {
        button.style.background = theme.dark_color
        login_dialog.style.display = 'flex'
        isDialogOpened = true;
    }
}