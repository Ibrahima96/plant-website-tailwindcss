/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu =document.getElementById('nav-menu');
const navLink =document.querySelectorAll('.nav-link');
const hamburger=document.getElementById('hamburger');
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-line');

    
})
navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navMenu.classList.toggle('left-[0]');
        hamburger.classList.toggle('ri-close-large-line');
    })  
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/