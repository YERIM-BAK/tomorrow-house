const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)
// console.log(drawerMenuButtonList)

function toggleDrawerMenu() {
  // drawerMenuButton를 감싸고 있는 drawer-menu한테 is-open 토글
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

// drawerMenuButton.addEventListener('click', toggleDrawerMenu)

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
