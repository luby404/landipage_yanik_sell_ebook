const scrollHeader = () =>{
    const header = document.querySelector('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)






var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0
};

ScrollReveal({ reset: true}).reveal('.infos', slideUp);
ScrollReveal({ reset: true, delay: 300 }).reveal('.banner_ebook', slideUp);
ScrollReveal({ reset: true}).reveal('.carrocel_content', slideUp);




document.querySelectorAll(".cards .card").forEach((element, index) => {
    ScrollReveal({ reset: true, delay: index*200 }).reveal(element, slideUp);
});










