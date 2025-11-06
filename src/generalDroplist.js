function initializeDroplistGeneral(droplistLocation, droplistContents, datasetKey){
    const droplists = document.querySelectorAll(droplistLocation);
    const contentsDroplist = document.querySelectorAll(droplistContents);

    function droplistContentsReset() {
    droplists.forEach((d) => d.classList.remove("active"));
    contentsDroplist.forEach((c) => c.classList.remove("active"));
  }

   function handleDroplistContents(event) {
    const clickedButton = event.currentTarget;
    const droplistContentsID = clickedButton.dataset[datasetKey];
    const contents = document.getElementById(droplistContentsID);
    const isAlreadyActive = contents.classList.contains("active");

    droplistContentsReset();

    if (!isAlreadyActive) {
      clickedButton.classList.add("active");
      contents.classList.add("active");
      };
    };

  droplists.forEach((button) => button.addEventListener("click", handleDroplistContents));
};