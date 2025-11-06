function initializeCookiePopup() {

    const cookiePop = document.getElementById("cookiePopup");
    const acceptCookiesButton = document.getElementById("acceptCookiesButton");

    if(localStorage.getItem("cookieAccept") === "true"){
        cookiePopup.classList.add("hidden");
    }

    acceptCookiesButton.addEventListener("click",() => {
        cookiePop.classList.add("hidden");
        localStorage.setItem("cookieAccept","true");
    });
};