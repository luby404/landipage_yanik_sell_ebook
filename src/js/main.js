/*const scrollHeader = () =>{
    const header = document.querySelector('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)*/






var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0
};

ScrollReveal({ reset: true}).reveal('.infos', slideUp);
ScrollReveal({ reset: true, delay: 300 }).reveal('.card_img', slideUp);




document.querySelectorAll(".cards .card").forEach((element, index) => {
    ScrollReveal({ reset: true, delay: index*200 }).reveal(element, slideUp);
});

document.querySelectorAll(".cards .test_mu").forEach((element, index) => {
    ScrollReveal({ reset: true, delay: index*200 }).reveal(element, slideUp);
});


let msg = document.querySelector(".message")

setInterval(() => {
    

    msg.classList.add("show")
    msg.innerHTML = `
    
    <span id="name">Nova Venda Realizada</span>
    
    `


    setTimeout(() => {
        msg.classList.remove("show")
    }, 1500);
    

}, 5000);





