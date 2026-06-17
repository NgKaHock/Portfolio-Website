// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// menu show
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })

}

// menu hidden
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction)) 

// home type js
const typedHome = new Typed('#hometyped', {
    strings: ['System Developer', 'Programmer', 'Freelancer'], // insert profession
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})

//  Add shadow header
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')


}

window.addEventListener('scroll', shadowHeader)

// contact email js
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_2z6mj5c', 'template_zcy7wil', '#contact-form', 'WmKcp0kDaU1DbvHsh')
    .then(() => {
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clear input fields
        contactForm.reset()
    },() => {
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

// show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// active link scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true, // animations repeat
})

sr.reveal('.home__content,.resume__content:nth-child(1),.footer_container')
sr.reveal('.home__data,.resume__content:nth-child(2)', {origin: 'bottom', delay: 300})

sr.reveal('.about__content, .contact__content', {origin: 'bottom'})
sr.reveal('.about_image,.contact__form', {delay:300})

sr.reveal('.projects__card', {interval: 100})















