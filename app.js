const btn = document.getElementsByClassName("hovered");
const btn2 = document.getElementsByClassName("share-btn-wrapper");
const panel = document.getElementsByClassName("share-panel-wrapper");

console.log(btn);

btn[0].addEventListener("click", () => {
  panel[0].style.cssText = "display:none !important";
});

btn2[0].addEventListener("click", () => {
  panel[0].style.cssText = "display:flex !important";
});
