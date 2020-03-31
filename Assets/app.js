var hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links-mobile");
const click =document.querySelector(".nav-links-mobile li a")
const links = document.querySelector(".nav-links-mobile li");
const body = document.getElementsByTagName("body");
var navbar =document.getElementById("navbars");
hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("nav-active");
   
}
)
click.addEventListener("click",()=>{
    navLinks.classList.add("");
})
window.onscroll =function(){myFunction()};
var navbar =document.getElementById("navbars");
var hamburger = document.querySelector(".hamburger");
var lines = document.querySelector(".line");
const sticky = navbar.offsetTop;
const height = 50;
function myFunction(){
    if (window.pageYOffset > height){
        navbar.classList.add("stick");
        hamburger.classList.add("sticky-hamburger");
        lines.classList.add("line-sticky");
    } else{
        navbar.classList.remove("stick");
        hamburger.classList.remove("sticky-hamburger");
        lines.classList.remove("line-sticky");
    }
} $(document).ready(function(){
    $('#head').ripples({
      dropRadius: 7,
      perturbance: 0.006 ,
    });
    $('html').smoothScroll(1100);
  })


  var options = {
    strings: ["", "my name is <br><strong class='primary'> Israel Oduguwa.</strong>"],
    typeSpeed: 50,
   
    
  };
  
  var typed = new Typed('.intro-name', options);


particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 159,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 1000,
        "size": 10,
        "duration":0.3,
        "opacity": 0.5,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}
);
new WOW().init();
const meButton = document.querySelector(".me");
const skillsButton = document.querySelector(".skills");
const resumeButton = document.querySelector(".resume");
const tabContent = document.getElementById("tab-content");
const skills = document.querySelector(".skills-intro");
const me =document.querySelector(".me-intro");
const resume =document.querySelector(".resume-intro");
function getButtonsMe(){
me.classList.add("me-intro-show");
skills.classList.remove("skills-intro-show");
resume.classList.remove("resume-intro-show");
meButton.innerHTML=`<strong class="btn-clicked animated  fadeInLeft  delay-0.2s"><i class="fa fa-arrow-down" aria-hidden="true"></i></strong> <strong class="me-clicked">Me</strong> `
skillsButton.innerHTML=`<strong class="skills-clicked">Skills</strong> `
resumeButton.innerHTML=`<strong class="resume-clicked">What I Do</strong> `
}
//skills
meButton.addEventListener("click",getButtonsMe,false);
skillsButton.addEventListener("click",()=>{
skills.classList.add("skills-intro-show");
me.classList.add("me-intro-remove");
me.classList.remove("me-intro-show");
resume.classList.remove("resume-intro-show");
meButton.innerHTML=`<strong class="me-clicked">Me</strong>`
skillsButton.innerHTML=`<strong class="btn-clicked animated fadeInLeft  delay-0.2s "><i class="fa fa-arrow-down" aria-hidden="true"></i></strong> <strong class="skills-clicked">Skills</strong> `
resumeButton.innerHTML=`<strong class="resume-clicked">What I Do</strong> `;

var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0
})
//resume
resumeButton.addEventListener("click",()=>{
 resume.classList.add("resume-intro-show");
 console.log(resume);
 me.classList.add("me-intro-remove");
me.classList.remove("me-intro-show");
skills.classList.remove("skills-intro-show");
resumeButton.innerHTML=`<strong class="btn-clicked animated fadeInLeft  delay-0.2s "><i class="fa fa-arrow-down" aria-hidden="true"></i></strong> <strong class="resume-clicked">What I Do</strong> `
skillsButton.innerHTML=`<strong class="skills-clicked">Skills</strong> `
meButton.innerHTML=`<strong class="me-clicked">Me</strong>`
})


