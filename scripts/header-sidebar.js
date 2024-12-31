export { toggleSearchBar, toggleSidebar, hamburgerMenu, searchButtonMobile}  // export all variables and functions to be used in other files


// calling all page elements
const sidebar = document.querySelector('.js-sidebar')
const hamburgerMenu = document.querySelector('.js-hamburger-menu')
const searchBarMobile = document.querySelector('.js-search-bar-mobile')
const searchButtonMobile = document.querySelector('.js-search-button-mobile')


// event listeners
function toggleSearchBar() {
  searchBarMobile.classList.toggle('active')
}

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-open')
}