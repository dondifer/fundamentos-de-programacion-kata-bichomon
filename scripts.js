console.log(document.title);
document.querySelector("#infocard-list").style.background =
  "linear-gradient(90deg, rgba(0,4,255,1) 35%, rgba(255,0,0,1) 100%)";

console.log(document.location.href);
console.log(document.location.host);
const img = document.getElementsByTagName("img");

console.log(img);
const arr = [...img];
arr.forEach(function (item) {
  item.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

const allFly = document.querySelectorAll(".itype.flying");
const allFlyArr = [...allFly];
allFlyArr.forEach((item) => {
  item.parentNode.parentNode.style.background = "#9be0fe";
});
