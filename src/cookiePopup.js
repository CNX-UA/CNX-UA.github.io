function initializeCookiePopup() {

    const cookiePopup = document.getElementById("cookiePopup");
    const accept_cookies_button = document.getElementById("acceptCookiesButton");

    if(localStorage.getItem("cookieAccept") === "true"){
        cookiePopup.classList.add("hidden");
    }

    accept_cookies_button.addEventListener("click",() => {
        cookiePopup.classList.add("hidden");
        localStorage.setItem("cookieAccept","true");
    });
};