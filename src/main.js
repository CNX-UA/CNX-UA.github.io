document.addEventListener("DOMContentLoaded", function() {
initializeTabsGeneral(".tabBar > div", ".tabContent", "tab");
initializeAccordion(".faqAccordion > button",".faqPanel","panel");
initializeAccordion(".projectsAccordion > button",".projectsPanel","panel");
initializeAccordion(".skillsAccordion > button",".skillsPanel","panel");
/*initializeAccordion(".workExpAccordion > button",".workExpPanel","panel") temporarily disabled */
initializeDarkMode();
});