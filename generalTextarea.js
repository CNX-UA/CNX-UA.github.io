/**
 * 
 * @param {string} textareaLocation 
 * @param {string} textareaCounterLocation 
 * @param {number} maxLengthCounter 
 */
function initializeTextareaGeneral(textareaLocation, textareaCounterLocation, maxLengthCounter) {
    const textareas = document.querySelectorAll(textareaLocation);
    const maxTextareaLengthCounter = maxLengthCounter;
    textareas.forEach(textarea =>{
        const textareaCounter = textarea.parentElement.querySelector(textareaCounterLocation);
        textarea.addEventListener("input", () =>{
            let currentTextareaLengthCounter = textarea.value.length;
            if(currentTextareaLengthCounter >= maxLengthCounter){
                textarea.classList.add("error");
                textarea.value = textarea.value.substring(0, maxTextareaLengthCounter);
                currentTextareaLengthCounter = maxTextareaLengthCounter;
            } else {
                textarea.classList.remove("error");
            }
            textareaCounter.textContent = `${currentTextareaLengthCounter} / ${maxTextareaLengthCounter}`;
        });
    });
};    