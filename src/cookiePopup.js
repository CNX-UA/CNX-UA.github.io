function initializeCookiePopup() {

    const cookiePopup = document.getElementById("cookiePopupDisplay");
    const acceptCookiesButton = document.getElementById("acceptCookiesButton");

    if(localStorage.getItem("cookieAccept") === "true"){
        cookiePopup.classList.add("hidden");
    }

    acceptCookiesButton.addEventListener("click",() => {
        cookiePopup.classList.add("hidden");
        localStorage.setItem("cookieAccept","true");
    });
};