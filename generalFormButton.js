/**
 * 
 * @param {string} buttonLocation 
 */
function initializeFormButtonGeneral(buttonLocation){
    const buttons = document.querySelectorAll(buttonLocation);
    buttons.forEach(buttons => {
        buttons.addEventListener("click", (event) =>{
            event.preventDefault();
            console.log("Button clicked!");
        });
    });
};