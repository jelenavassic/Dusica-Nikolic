

const bar = document.querySelector('.bar');
const navItems = document.getElementById('hamitems');
const navigation = document.getElementById('navigation');
const hamnav = document.getElementById('hamnav');


bar.addEventListener('click', () => {
  navItems.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 599) {
    navItems.classList.remove('show');
    navigation.style.display="flex";
    hamnav.style.display="none";
   }
  else {
    navigation.style.display = "none";
    hamnav.style.display="flex";
  }
});
 