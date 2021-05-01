const shareBox = document.getElementsByClassName("share-box");
const rectangular = document.getElementsByClassName("rectangular");
const shareBtn = document.getElementsByClassName("share-btn-wrapper");
const arrow = document.getElementsByClassName("arrow");
const shareBoxParent = document.getElementsByClassName("share-wrapper");

shareBtn[0].addEventListener("click", () => clickHandler());

const clickHandler = () => {
  console.log(shareBox[0].classList.length);
  if (shareBox[0].classList.length == 2) {
    shareBox[0].classList = shareBox[0].classList[0];
    rectangular[0].classList = rectangular[0].classList[0];
    shareBtn[0].className += " clicked2";
    arrow[0].className += " clicked";
  }
};

document.addEventListener("click", (e) => {
  let isInside = shareBoxParent[0].contains(e.target);

  if (!isInside && !shareBtn[0].contains(e.target)) {
    shareBox[0].className += " hidden";
    rectangular[0].className += " hidden";
    shareBtn[0].classList = shareBtn[0].classList[0];
    arrow[0].classList = arrow[0].classList[0];
  }
});
