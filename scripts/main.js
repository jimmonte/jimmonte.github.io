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
const h1Elem = document.querySelector("h1");
let userName;

function queryAndSaveNewUserName() {
  userName = prompt("Please enter your name.", "user")?.trim() || "user";
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
  h1Elem.textContent = `Hello, ${userName}!`;
}

btnElem.onclick = () => {
  queryAndSaveNewUserName();
  setHeader();
};

setHeader();

// document.querySelector("body").addEventListener("click", function () {
//   alert("Ouch! Stop it!");
// });
// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });