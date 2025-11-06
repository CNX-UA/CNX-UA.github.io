/**
 *
 * @param {string} textareaLocation
 * @param {string} textareaCounterLocation
 * @param {number} maxLengthCounter
 */
function initializeTextareaGeneral(textareaLocation, textareaCounterLocation, maxLengthCounter) {
  const textareas = document.querySelectorAll(textareaLocation);
  const maxTextareaLengthCounter = maxLengthCounter;

  function handleTextareaInput(event) {
    const textarea = event.currentTarget;
    const textareaCounter = textarea.parentElement.querySelector(textareaCounterLocation);

    let currentTextareaLengthCounter = textarea.value.length;

    if (currentTextareaLengthCounter >= maxLengthCounter) {
      textarea.classList.add("error");
      textarea.value = textarea.value.substring(0, maxTextareaLengthCounter);
      currentTextareaLengthCounter = maxTextareaLengthCounter;
    } else {
      textarea.classList.remove("error");
    }

    textareaCounter.textContent = `${currentTextareaLengthCounter} / ${maxTextareaLengthCounter}`;
  }

textareas.forEach((textarea) => textarea.addEventListener("input", handleTextareaInput));
};
