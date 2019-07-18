var app = new Vue({
  el: "#app",
  data:{
    homepage: true,
    about: false,
    portfolio: false,
    solutions: false,
    contact: false,
    isBurgerActive: false,
    isActive: false,
  },

  methods:{

    // NAV
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
    },

    toggleNav: function(event){
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
      }
    },

    outsideClick: function(event){
      console.log($(event.target).classList)
      if($(event.target).id !== 'navbarExample'){
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
        if ($navbarBurgers.length > 0) {
          $navbarBurgers.forEach( el => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
          });
        }
      }
    },

    // ABOUT
    aboutEnter: function(){
      document.getElementById("click-for-video").style = "opacity: 1";
    },

    aboutLeave: function(){
      document.getElementById('click-for-video').style = "opacity: 0";
    },

    toggleModal: function(){
      document.getElementsByClassName('modal')[0].classList.toggle('is-active');
    },

    toggleBG: function(){
      document.getElementsByClassName('modal')[0].classList.toggle('is-active')
      document.getElementsByTagName('video')[0].pause()
    }
  },

  mounted: function(){
    // PARTICLES JS
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });


    // CHART
    {
    var ctx = document.getElementById("myChart");

    console.log(ctx)

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
    }

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