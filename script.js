document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

var typed = new Typed('#typed',{
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 25,
  loop: true,
  showCursor: true
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
}

Tu.tScroll({
't-element': '.zoomOut',
't-duration': 0.8
})

ctx = document.getElementById("myChart");

if(document.documentElement.clientWidth < 560){
ctx.height = 160;
}
else{
  ctx.height = 80;
}
var myChart = new Chart(ctx, {
type: 'doughnut',
data: {
  labels: ["Web Design", "Photography", "Marketing"],
  datasets: [
    {
      backgroundColor: ["#3e95cd", "#3cba9f", "#8e5ea2"],
      data: [50,20,30]
    }
  ]
},
options: {
  legend: {
    labels: {
      fontColor: "#FFF",
      fontSize: 18
    }
  },

  animation: {
    duration: 3000
  },

  tooltips:{ 
    enabled: false
  }
}
});


particlesJS.load('particles-js', 'particles.json', function() {
console.log('callback - particles.js config loaded');
});

$("#about").mouseover(function(){
  $("#about img").addClass("meet-hover");
  $("#click-for-video").fadeIn(1500);
});

$("#about").mouseleave(function(){
  $("#about img").removeClass("meet-hover");
  $("#click-for-video").fadeOut(600);
});

$("#about img").click(function(){
  $(".modal").toggle("is-active");
});

$(".modal-background").click(function(){
  $(".modal").toggle("is-active");
  $("video").get(0).pause();
});

$(".modal-close").click(function(){
  $(".modal").toggle("is-active");
  $("video").get(0).pause();
});