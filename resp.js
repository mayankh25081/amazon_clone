burger = document.querySelector('.burger')
navbar = document.querySelector('.pannel')
navAdd = document.querySelector('.pan-all')
navsearch = document.querySelector('.pan-ops')
navsignup = document.querySelector('.pan-deals')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
navsearch.classList.toggle('v-class-resp');
    navAdd.classList.toggle('v-class-resp');
    navsignup.classList.toggle('v-class-resp');
})