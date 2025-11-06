/**
 *
 * @param {string} buttonLocation
 */
function initializeFormButtonGeneral(buttonLocation) {
  const buttons = document.querySelectorAll(buttonLocation);

  function formButtonsHandler(event) {
    event.preventDefault();
    console.log("Button clicked!");
  };

  buttons.forEach((buttons) => buttons.addEventListener("click", formButtonsHandler));
};