const header = document.querySelector('header');
const hamburgerButton = document.querySelector('.hamburger-button');

console.log(hamburgerButton);

hamburgerButton.addEventListener('click', function () {
  header.classList.toggle('active');
  hamburgerButton.classList.toggle('active');
});
