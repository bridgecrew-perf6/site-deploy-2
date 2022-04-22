class Api {
    constructor() {

    }

    login(phone, password) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '', true);

        xhr.onload = function () {
            // Request finished. Do processing here.
        };

        xhr.onerror = ev => {
            callback(null, ev)
        }

        xhr.send(null);
    }
}