function checkbox() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementsByClassName('top_nav')[0].style.backgroundColor = '#3C3B3A';
  var cols = document.getElementsByClassName('user_timeline');
  for(i = 0; i < cols.length; i++) {
    cols[i].style.backgroundColor = '#3C3B3A';
  }
}

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length;
for (let i = 0; i < menuItem.length; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = 'active'
  }
  
}