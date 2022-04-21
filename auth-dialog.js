import './styles/dialog.less'

let submit = document.getElementById('submit-login-button')
let button = document.getElementById('login_button')
let login_dialog = document.getElementById('login_dialog')

let isDialogOpened = false;

button.onclick = ev => {
    if (isDialogOpened) {
        button.style.background = "#fff"
        login_dialog.style.display = 'none'
        isDialogOpened = false
    } else {
        button.style.background = "#e3e4e6"
        login_dialog.style.display = 'flex'
        isDialogOpened = true;
    }
}