


// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
// coll[i].addEventListener("click", function() {
//   this.classList.toggle("active");
//   var content = this.nextElementSibling;
//   if (content.style.display === "block") {
//     content.style.display = "none";
//   } else {
//     content.style.display = "block";
//   }
// });
// }

var app = new Vue({
  el: "#app",
  data:{
    homepage: true,
    about: false,
    portfolio: false,
    solutions: false,
    contact: false,
  },

  methods:{
    changePage: function(page){
      if(page === 'home'){
        this.homepage = true
        this.about = false
        this.portfolio = false
        this.solutions = false
        this.contact = false
      }
      else if (page === 'about'){
        this.homepage = false
        this.about = true
        this.portfolio = false
        this.solutions = false
        this.contact = false
      }
      else if (page === 'portfolio'){
        this.homepage = false
        this.about = false
        this.portfolio = true
        this.solutions = false
        this.contact = false
      }
      else if (page === 'solutions'){
        this.homepage = false
        this.about = false
        this.portfolio = false
        this.solutions = true
        this.contact = false
      }
      else{
        this.homepage = false
        this.about = false
        this.portfolio = false
        this.solutions = false
        this.contact = true
      }
    }
  },

  mounted: function(){
    // NAVBAR BURGER
    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    });


    // PARTICLES JS
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });


    // CHART
    ctx = document.getElementById("myChart");

    if(document.documentElement.clientWidth < 560){
    ctx.height = 300;
    }
    else{
      ctx.height = 400;
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

    // TYPED
    var typed = new Typed('#typed',{
      stringsElement: '#typed-strings',
      backSpeed: 40,
      typeSpeed: 25,
      loop: true,
      showCursor: true
    });
    
  }

});