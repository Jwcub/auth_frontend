"use strict";

window.onload = init;

function init() {
    if(!localStorage.getItem("login-token")) {
        window.location.href = "login.html";
        getProtectedContent()
    }
}