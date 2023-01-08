//const h = document.querySelector('h1');
//h.textContent = "Hello World";


const ff = document.querySelector("img");
ff.onclick = (function(/*...args*/) {
  const nIndex = arguments.length;
  // const imgOpt = [...args];
  // const nIndex = imgOpt.length;
  const initWidth = ff.width;
  const initHeight = ff.height;
  let index = 0;

  return () => {
    index = ++index % nIndex;
    //ff.setAttribute("src", imgOpt[index]);
    ff.setAttribute("src", arguments[index]);
    ff.setAttribute("width", initWidth);
    ff.setAttribute("height", initHeight);
  }
})("images/firefox-icon.png",
    "images/firefox-icon2.png",
    "images/firefox-icon3.png",
    "images/firefox-icon4.png",
    "images/firefox-icon5.png"
    );

const btnElem = document.querySelector("button");
const h1SpanElem = document.querySelector("span");
let userName;

function queryAndSaveNewUserName() {
  const newName = prompt("Please enter your name.", "user")?.trim();
  if (!newName) {
    newName = sessionStorage.getItem("userName") || "user";
  }
  userName = newName;
  sessionStorage.setItem("userName", userName);
}

function assignUserName() {
  userName = sessionStorage.getItem("userName");
  if (!userName) {
    queryAndSaveNewUserName();
    userName = sessionStorage.getItem("userName");
  }
}

function setHeader() {
  assignUserName(); 
  h1SpanElem.textContent = userName;
}

btnElem.onclick = () => {
  queryAndSaveNewUserName();
  setHeader();
};

h1SpanElem.onclick = btnElem.onclick;

setHeader();

// document.querySelector("body").addEventListener("click", function () {
//   alert("Ouch! Stop it!");
// });
// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });