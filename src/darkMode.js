function initializeDarkMode(){
    const themeButtonToggle = document.querySelectorAll(".themeToggle");
    const htmlElement = document.documentElement;

    const buttonTextUpdate = () => {
        const newText = htmlElement.classList.contains("dark") ? "Light mode" : "Dark mode";
    
        themeButtonToggle.forEach(button => {
            button.textContent = newText;
        });
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
    themeButtonToggle.forEach(button =>{
    button.addEventListener("click", themeButtonHandler);
    });
};