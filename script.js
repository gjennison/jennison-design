// PARTICLES
Vue.component('particles', {
  mounted: function(){
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  },
  template: '<div id="particles-js"></div>',
})

// TYPED
Vue.component('typed',{
  mounted: function(){
    var typed = new Typed('#typed',{
      stringsElement: '#typed-strings',
      backSpeed: 40,
      typeSpeed: 25,
      loop: true,
      showCursor: true
    })
  },
  template: '<span class="subtitle" id="typed"></span>'
})

// CHART
Vue.component('chart', {
  mounted: function(){
    
    var ctx = document.getElementById('myChart')
    
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
    })
  },

  template: "<canvas id='myChart'></canvas>",
})

var app = new Vue({
  el: "#app",
  data:{
    homepage: true,
    about: false,
    portfolio: false,
    solutions: false,
    projects: false,
    contact: false,

    pages: [true, false, false, false, false, false],

    isBurgerActive: false,
    isActive: false,

    // PROJECTS
    projects: [true, false, false],


    // GALLERY
    gallery: true,
    galleryItems: [
        ["imgs/1.jpg", "just majestic"],
        ["imgs/2.jpg", "simply stunning"],
        ["imgs/3.jpg", "quite marvelous"],
        ["imgs/4.jpeg", "how pajricious"],
        ["imgs/5.jpeg", "finally something stemming from capriciousness"],
        ["imgs/6.jpg", "it makes me think of vienna"],
        ["imgs/7.jpg", "oh honey get the red wine"],
        ["imgs/8.jpg", "I want to drown in camembere"],
    ],

    // TODO
    todoQuery: "",
    todoItems: [],
    totalActive: 0,
    totalSuccess: 0,

    // SEARCH
    searchQuery: "",
    searchItems:[
        "Mt Everest",
        "Te Araroa Trail",
        "Appalachian trail",
        "Pacific crest trail",
        "Mount Cook",
        "Mount Kilimanjaro",
        "All praise Arch Linux",
        "Mount Hikurangi",
        "Arthurs Pass",
        "Raglan surf beach",
        "Mt Hutt",
        "Great Ocean Walk, Victoria",
        "Overland track, Tasmania",
    ],
  },

  methods:{

    // NAV
    changePage: function(page){
      for(i = 0; i < this.pages.length; i++){
        if(i === page){
          for(x = 0; x < this.pages.length; x++){
            this.$set(this.pages, x, false)
          }
          this.$set(this.pages, page, true)
        }
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
      if(event.target.id !== 'navbarExample'){
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
        if ($navbarBurgers.length > 0) {
          $navbarBurgers.forEach( el => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              el.classList.remove('is-active');
              $target.classList.remove('is-active');
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
    },

    // PROJECTS

    changeProject: function(project, event){

      var amber = "color: rgb(255,210,77)"
      var white = "color: white"


      const gallery = document.getElementById('navGallery')
      const todo = document.getElementById('navTodo')
      const search = document.getElementById('navSearch')

      for(i = 0; i < this.projects.length; i++){

        if(i === project){
          // PROJECT NAV
          for(x = 0; x < this.projects.length; x++){
            this.$set(this.projects, x, false)
          }
          this.$set(this.projects, project, true)

          // COLOUR CHANGE
          if(i === 0){
            gallery.style = amber
            todo.style = white
            search.style = white
          }

          else if(i === 1){
            gallery.style = white
            todo.style = amber
            search.style = white
          }

          else{
            gallery.style = white
            todo.style = white
            search.style = amber
          }
        }
      }
    },

    // TODO
    append: function(){
      this.todoItems.push([this.todoQuery, false])
      this.todoQuery = ""

      this.totalActive++;
    },

    completed: function(item, event){
        target = event.target

        if(event.target.tagName === "DIV")
            target = event.target.parentElement
        
        else if(target.tagName === "BUTTON")
            return

        if(item[1] === false){
            item[1] = true;
            target.classList.add("success");
            target.classList.remove("active");

            this.totalActive--;
            this.totalSuccess++;
        }
        else{
            item[1] = false;
            target.classList.add("active");
            target.classList.remove("success");
            
            this.totalActive++;
            this.totalSuccess--;
        }
    },

    removeTodo: function(item){
        this.todoItems.splice(this.todoItems.indexOf(item), 1)
        console.log(this.todoItems.indexOf(item))

        console.log(item)
        if(item[1] == false)
            this.totalActive--;
        else
            this.totalSuccess--;
    },

    // SEARCH
    isInItems: function(item){
      if(item.toUpperCase().includes(this.searchQuery.toUpperCase()))
          return true
      else
          return false
    },

  },

  mounted: function(){
    document.getElementById("navGallery").style = "color: rgb(255,210,77)";
  }
});