
// Add Scroll Class To navbar and show go up button
const addScroll = function() {
    let navbar = document.querySelector('nav');
    
    $(window).scroll(function() {
        let windowScrollTop = Math.trunc($(window).scrollTop());

        if(windowScrollTop >= 30){
            navbar.classList.add('scroll-nav');
        }else{
            navbar.classList.remove('scroll-nav')
        }
    })

}

// Add Active Class to Links
const addActiveClass = function () {
    let sections = document.querySelectorAll('.section');
    let links = document.querySelectorAll('.menu-link');

    const addClass = function (entries, observer){
        let [entry] = entries;

        if(!entry.isIntersecting) return;
        links.forEach(link => {
            if(link.getAttribute('href') === `#${entry.target.getAttribute('id')}`){
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
        })
    }

    const sectionObserver = new IntersectionObserver(addClass, {
        root: null,
        threshold: 0.4
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    })
}

// Switcher Function
const toggle = function() {
    let switcher = document.querySelector('.switcher');

    switcher.addEventListener('click', function() {
        $(switcher).children().toggleClass('bx-toggle-left');
        $(switcher).children().toggleClass('bx-toggle-right');
        $('body, html').toggleClass('dark');
    });
}

// click on menu icon to show menu
const showMenu = function () {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show-menu')
    })
}

// show go p button
const showBtn = function() {
    let goUpBtn = document.querySelector('.goup-btn');
    
    $(window).scroll(function() {
        let windowScrollTop = $(window).scrollTop();
        let aboutOffset = $('#about').offset().top;

        if(windowScrollTop >= aboutOffset) {
            goUpBtn.classList.add('show-btn');
        }else{
            goUpBtn.classList.remove('show-btn');
        }
    })
}


addScroll();
addActiveClass();
toggle();
showMenu();
showBtn();