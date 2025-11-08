document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready!"); // For testing
  console.log("Finding buttons:", document.querySelectorAll(".skillsAccordion > button"));
/* initializeCookiePopup(); temp disabled till fix*/
/*initializeContentButtons(".droplistContentTab1 button", 
    handleDroplistContent(
        initializeDroplistGeneral(".droplistButtonTab1",".droplistContentTab1","droplist",),
        ".droplistContentTab1")); temp disabled */
initializeTabsGeneral(".tabBar > div", ".tabContent", "tab");
/* initializeTabsGeneral(".loginSignupTab > div",".loginSignupContent", "loginSignup"); commented out due to not being needed*/
initializeAccordion(".faqAccordion > button",".faqPanel","panel");
initializeAccordion(".projectsAccordion > button",".projectsPanel","panel");
initializeAccordion(".skillsAccordion > button",".skillsPanel","panel");
/*initializeAccordion(".workExpAccordion > button",".workExpPanel","panel") temporarily disabled */
/*initializeTextareaGeneral(".feedbackTextareaTab",".feedbackTextareaCounter",250); temporarily disabled*/
/*initializeFormButtonGeneral(".sendFeedback"); */
});