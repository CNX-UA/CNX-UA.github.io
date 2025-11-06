/**
 * 
 * @param {string} droplistButton 
 * @param {string} buttonText 
 */
function handleDroplistButton(droplistButton, buttonText){
    if (droplistButton){
        droplistButton.textContent = `${buttonText}`;
    };
};
/**
 * 
 * @param {function} droplistContentsReset 
 * @param {string} droplistContents 
 * @returns {function} handleDroplistContent
 */
function handleDroplistContent(droplistContentsReset, droplistContents){
    return function onDroplistButtonClick(event){
        const clickedButton = event.target;
        const buttonText = clickedButton.textContent;

        const droplistContent = clickedButton.closest(droplistContents);
        let droplistContentsID;
        if (droplistContent){droplistContentsID = droplistContent.id} else {null};
        let buttonName;
        if (droplistContentsID){buttonName = document.querySelector(`[data-droplist="${droplistContentsID}"]`)} else {null};

        handleDroplistButton(buttonName, buttonText);

        if(droplistContentsReset){
            droplistContentsReset();
        };
    };
};