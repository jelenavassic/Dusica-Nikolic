

const bar = document.querySelector('.bar');
const navItems = document.getElementById('hamitems');
const navigation = document.getElementById('navigation');
const hamnav = document.getElementById('hamnav');
const aboutImg=document.getElementById('aboutImg');

bar.addEventListener('click', () => {
  navItems.classList.toggle('show');
});

let menuResize = function(){
  if (window.innerWidth > 599) {
    navItems.classList.remove('show');
    navigation.style.display="flex";
    hamnav.style.display="none";
   }
  else {
    navigation.style.display = "none";
    hamnav.style.display="flex";
    aboutImg.setAttribute('src', '../media/photo/2.jpg');
  }
}


window.addEventListener('resize', menuResize);
menuResize()





 