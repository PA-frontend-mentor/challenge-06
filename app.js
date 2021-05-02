const shareBox = document.getElementsByClassName("share-box");
const rectangular = document.getElementsByClassName("rectangular");
const shareBtn = document.getElementsByClassName("share-btn-wrapper");
const arrow = document.getElementsByClassName("arrow");
const shareBoxParent = document.getElementsByClassName("share-wrapper");

shareBtn[0].addEventListener("click", () => clickHandler());
shareBtn[0].addEventListener("mouseenter", () => clickHandler());
shareBoxParent[0].addEventListener("mouseleave", () => mouseLeave());

const clickHandler = () => {
  console.log(shareBox[0].classList.length);
  if (shareBox[0].classList.length == 2) {
    shareBox[0].classList = shareBox[0].classList[0];
    rectangular[0].classList = rectangular[0].classList[0];
    shareBtn[0].className += " clicked2";
    arrow[0].className += " clicked";
  }
};

const mouseLeave = () => {
  if (shareBox[0].classList.length == 1) {
    shareBox[0].className += " hidden";
    rectangular[0].className += " hidden";
    shareBtn[0].classList = shareBtn[0].classList[0];
    arrow[0].classList = arrow[0].classList[0];
  }
};

document.addEventListener("click", (e) => {
  let isInside = shareBoxParent[0].contains(e.target);

  if (!isInside && !shareBox[0].contains(e.target) && shareBox[0].classList.length == 1) {
    shareBox[0].className += " hidden";
    rectangular[0].className += " hidden";
    shareBtn[0].classList = shareBtn[0].classList[0];
    arrow[0].classList = arrow[0].classList[0];
  }
});
