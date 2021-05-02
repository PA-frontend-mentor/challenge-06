const shareBtn = document.querySelector(".share-btn-arrow");
const shareParent = document.querySelector(".share-btn-wrapper");
const sharePanel = document.querySelector(".share-btn-panel");
const rectangle = document.querySelector(".share-btn-rectangle");

shareBtn.addEventListener("mouseover", () => {
  sharePanel.classList = sharePanel.classList[0];
  rectangle.classList = rectangle.classList[0];
});

shareParent.addEventListener("mouseleave", () => {
  sharePanel.className += " hidden";
  rectangle.className += " hidden";
});
