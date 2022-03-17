let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})


// variables for the faq's 
let open = document.querySelectorAll('.accordian');


// function for open and closing of the faq 
open.forEach((element) => {
    element.addEventListener("click", ()=>{
        content = element.parentElement.children[1];
        content.classList.toggle('active')
        // console.log('click')
    })
});
