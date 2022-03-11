const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-list');
console.log(toggleButton);
function navBar() {
  toggleButton.addEventListener('click', () => {
    console.log('click');
    navbarLinks.classList.toggle('active');
  });
}
navBar();
