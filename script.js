window.onscroll = function() {scrollFunction()};
    
var navbar = document.getElementById("navbarID");
var sticky = navbar.offsetTop;
var mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }

  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0
document.documentElement.scrollTop = 0;
}