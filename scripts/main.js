var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dividends.jpg') {
      myImage.setAttribute ('src','images/dividendscissors.jpeg');
    } else {
      myImage.setAttribute ('src','images/dividends.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Divindends are cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dividends are cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }