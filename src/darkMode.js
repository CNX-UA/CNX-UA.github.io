function initializeDarkMode(){
    const themeButtonToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    const buttonTextUpdate = () =>{
        if (htmlElement.classList.contains("dark")){
            themeButtonToggle.textContent = "Light mode";
        } else {
            themeButtonToggle.textContent = "Dark mode";
        }
    };

    if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("prefers-color-scheme: dark").matches)){
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    };

    buttonTextUpdate();

    function themeButtonHandler(){
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        };

        buttonTextUpdate();

    };

    themeButtonToggle.addEventListener("click", themeButtonHandler);
};