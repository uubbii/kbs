const mainMenuEl = document.querySelector('.main-menu');
const mainBgEl = document.querySelector('.menu-bg');

// console.log(mainMenuEl)
// console.log(mainBgEl)

mainMenuEl.addEventListener('mouseover',function(){
    mainBgEl.classList.add('on');
});

mainMenuEl.addEventListener('mouseout',function(){
    mainBgEl.classList.remove('on');
});

mainBgEl.addEventListener('mouseover',function(){
    mainBgEl.classList.add('on');
    mainMenuEl.classList.add('on');
});

mainBgEl.addEventListener('mouseout',function(){
    mainBgEl.classList.remove('on');
    mainMenuEl.classList.remove('on');
});

const mobileMenuEl = document.querySelector('.mobile-menu');
const closeMenuEl = document.querySelector('.close');
const mobileBoxEl = document.querySelector('.mobile-box');

mobileMenuEl.addEventListener('click',function(){
    mobileBoxEl.classList.add('show');
});
closeMenuEl.addEventListener('click',function(){
    mobileBoxEl.classList.remove('show');
});