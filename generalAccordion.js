/**
 * 
 * @param {string} AccordionButtonLocation 
 * @param {string} AccordionPanel 
 * @param {string} datasetKey
 */
function initializeAccordion(AccordionButtonLocation, AccordionPanel, datasetKey) {
    const buttons = document.querySelectorAll(AccordionButtonLocation);
    const panels = document.querySelectorAll(AccordionPanel);
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const clickedButton = event.currentTarget;
            const panelId = clickedButton.dataset[datasetKey];
            const panel = document.getElementById(panelId);
            const isAlreadyActive = panel.classList.contains("active");
            buttons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            if (!isAlreadyActive) {
                clickedButton.classList.add("active");
                if (panel && panel.classList.contains("faq_panel")) {
                    panel.classList.add("active");
                }
            }
        });
    });
};