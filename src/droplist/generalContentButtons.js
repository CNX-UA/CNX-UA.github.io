/**
 * 
 * @param {string} buttonLocation 
 * @param {function} buttonFunction 
 */
function initializeContentButtons(buttonLocation,buttonFunction){
    const buttons = document.querySelectorAll(buttonLocation);
    buttons.forEach(button => button.addEventListener("click", buttonFunction));
};