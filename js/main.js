/*function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var button = document.querySelector('.button-bottom');
var numbers = document.querySelector('#numbers');
var spotlight = document.querySelector('#spotlight');

button.addEventListener('click', () => {
    scrollTo(numbers, spotlight);
})
*/

document.querySelector(".wrapper").addEventListener("click", function(e) {
    var parent = document.querySelector(".wrap-img"),
      first = parent.querySelector(".first-screen_middle"),
      last = parent.querySelector(".first-screen_middle:last-child");
    if (e.target.classList.contains("arrow-bottom")) {
      parent.insertBefore(last, first);
    }
  });


/*dots===================================================================*/
  document.querySelector(".first-screen").addEventListener("click", function(e) {
    var parent = document.querySelector(".first-screen_dots"),
      first = parent.querySelector(".dot"),
      last = parent.querySelector(".dot:last-child");
    
    if (e.target.classList.contains("arrow-bottom")) {
      parent.insertBefore(last, first);
    }
  });


/*nav-icon=========================================================*/
const navBtn = document.querySelector('.burger');
const header = document.querySelector('.header')
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
  header.classList.toggle('header--mobile')
  menuIcon.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll')
}
