// Image switcher code
let myImage = document.querySelector('img');

let images = ['images/bonnie1.jpg', 'images/bonnie2.jpg', 'images/bonnie3.jpg', 'images/bonnie4.jpg', 'images/bonnie5.jpg', 'images/bonnie6.jpg', 'images/bonnie7.jpg', 'images/bonnie8.jpg', 'images/bonnie9.jpg',  'images/bonnie10.jpg', 'images/bonnie11.jpg', 'images/bonnie12.jpg', 'images/bonnie13.jpg', 'images/bonnie14.jpg', 'images/bonnie15.jpg', 'images/bonnie16.jpg', 'images/bonnie17.jpg', 'images/bonnie18.jpg', 'images/bonnie19.jpg', 'images/bonnie20.jpg', 'images/bonnie21.jpg', 'images/bonnie22.jpg', 'images/bonnie23.jpg', 'images/bonnie24.jpg', 'images/bonnie25.jpg', 'images/bonnie26.jpg', 'images/bonnie27.jpg', 'images/bonnie28.jpg', 'images/bonnie29.jpg', 'images/bonnie30.jpg', 'images/bonnie31.jpg',  'images/bonnie32.jpg', 'images/bonnie33.jpg', 'images/bonnie34.jpg', 'images/bonnie35.jpg', 'images/bonnie36.jpg', 'images/bonnie37.jpg', 'images/bonnie38.jpg', 'images/bonnie39.jpg', 'images/bonnie40.jpg', 'images/bonnie41.jpg', 'images/bonnie42.jpg', 'images/bonnie43.jpg'];

myImage.setAttribute('data-index', 0)

myImage.onclick = function() {
  let currentIndex = Number(myImage.getAttribute('data-index'));
  let nextIndex = currentIndex + 1 <images.length ? currentIndex + 1 : 0;
  let image = images[nextIndex];

  myImage.setAttribute('data-index', nextIndex);
  myImage.setAttribute('src', image);
}
 // Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Remember Bonnie, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Remember Bonnie, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}