initializeCookiePopup();
initializeContentButtons(".droplistContentTab1 button", 
    handleDroplistContent(
        initializeDroplistGeneral(".droplistButtonTab1",".droplistContentTab1","droplist",),
        ".droplistContentTab1"));
initializeTabsGeneral(".tabBar > div", ".tabContent", "tab");
initializeTabsGeneral(".loginSignupTab > div",".loginSignupContent", "loginSignup");
initializeAccordion(".faqAccordion > button",".faqPanel","panel");
initializeTextareaGeneral(".feedbackTextareaTab",".feedbackTextareaCounter",250);
initializeFormButtonGeneral(".sendFeedback");