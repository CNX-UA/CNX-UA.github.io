/* initializeCookiePopup(); temp disabled till fix*/
initializeContentButtons(".droplistContentTab1 button", 
    handleDroplistContent(
        initializeDroplistGeneral(".droplistButtonTab1",".droplistContentTab1","droplist",),
        ".droplistContentTab1"));
initializeTabsGeneral(".tabBar > div", ".tabContent", "tab");
/* initializeTabsGeneral(".loginSignupTab > div",".loginSignupContent", "loginSignup"); commented out due to not being needed*/
initializeAccordion(".faqAccordion > button",".faqPanel","panel");
initializeAccordion(".workExpAccordion > button",".workExpPanel","panel")
initializeTextareaGeneral(".feedbackTextareaTab",".feedbackTextareaCounter",250);
initializeFormButtonGeneral(".sendFeedback");