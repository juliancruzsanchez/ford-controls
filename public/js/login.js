const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('pin')) {
    window.location.href = "/controls.html?pin=" + urlParams.get('pin')
}

function login() {
    window.location.href = "/controls.html?pin=" + document.querySelector('input').value
}

function addNumber(x) {
    document.querySelector('input').value =  document.querySelector('input').value + x
    if (document.querySelector('input').value.length == 4) {
        login()
    }
}