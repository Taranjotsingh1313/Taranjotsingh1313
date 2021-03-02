const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.class-lists');

burger.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
    burger.classList.toggle('white')
});

const typed = new Typed('#typed',{
      strings: ["I am Web Developer.", "I Create Websites you want.", "Hope You Will Have Great Experience !"],
            backSpeed: 15,
            smartBackspace: true,
            backDelay: 1200,
            startDelay: 1000,
            typeSpeed: 25,
            loop: true,
})