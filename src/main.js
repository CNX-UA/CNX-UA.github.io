document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready!"); // For testing
  console.log("Finding buttons:", document.querySelectorAll(".skillsAccordion > button"));
initializeTabsGeneral(".tabBar > div", ".tabContent", "tab");
initializeAccordion(".faqAccordion > button",".faqPanel","panel");
initializeAccordion(".projectsAccordion > button",".projectsPanel","panel");
initializeAccordion(".skillsAccordion > button",".skillsPanel","panel");
/*initializeAccordion(".workExpAccordion > button",".workExpPanel","panel") temporarily disabled */
});