/**
 *
 * @param {string} accordionButtonLocation
 * @param {string} accordionPanel
 * @param {string} datasetKey
 */
function initializeAccordion(accordionButtonLocation, accordionPanel, datasetKey) {
  const buttons = document.querySelectorAll(accordionButtonLocation);
  const panels = document.querySelectorAll(accordionPanel);

  function buttonPanelReset() {
    buttons.forEach((b) => b.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
  }

  function handlePanels(event) {
    const clickedButton = event.currentTarget;
    const panelId = clickedButton.dataset[datasetKey];
    const panel = document.getElementById(panelId);
    const isAlreadyActive = panel.classList.contains("active");

    buttonPanelReset();

    if (!isAlreadyActive) {
      clickedButton.classList.add("active");
      panel.classList.add("active");
      };
    };

  buttons.forEach((button) => button.addEventListener("click", handlePanels));
};