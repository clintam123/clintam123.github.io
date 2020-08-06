let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Faze-Clan-2019.jpg") {
    myImage.setAttribute("src", "images/Faze-Logo.jpg");
  } else {
    myImage.setAttribute("src", "images/Faze-Clan-2019.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Faze is cool, " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Faze is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
