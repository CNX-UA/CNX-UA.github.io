function initializeCookiePopup() {
    const cookiePopup = document.getElementById("cookiePopup");
    const accept_cookies_button = document.getElementById("accept_cookies_button");
    if(localStorage.getItem("cookie_accept") === "true"){
        cookiePopup.classList.add("hidden");
    }
    accept_cookies_button.addEventListener("click",() => {
        cookiePopup.classList.add("hidden");
        localStorage.setItem("cookie_accept","true");
    });
};