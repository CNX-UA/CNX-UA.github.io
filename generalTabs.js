/**
 * @param {string} [datasetKey]
 * @param {string} [tabsLocation]
 * @param {string} [tabsContent]
 */
function initializeTabsGeneral(tabsLocation, tabsContent, datasetKey) {
    const tabs = document.querySelectorAll(tabsLocation);
    const contents = document.querySelectorAll(tabsContent);
    tabs.forEach(tab =>{
        tab.addEventListener("click", () =>{
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            tab.classList.add("active");
            const targetId = tab.dataset[datasetKey];
            const targetContent = document.getElementById(targetId);
            if(targetContent){
                targetContent.classList.add("active");
            }
        });
    })
};