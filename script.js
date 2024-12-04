const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menyBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menyBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click" ,(e)=>{
    navLinks.classList.remove("open")
    menyBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption  = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header_container .section_description", {
    ...scrollRevealOption,    
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container .section_subheader", {
    ...scrollRevealOption,
    delay: 1000,
});

//room container
ScrollReveal().reveal(".room_card",{
    ...scrollRevealOption,
    interval: 500,
});

//feature container
ScrollReveal().reveal(".feature_card",{
    ...scrollRevealOption,
    interval: 500,
});

//news container
ScrollReveal().reveal(".news_card",{
    ...scrollRevealOption,
    interval: 500,
});

// function click(){
//     const sBtn = document.getElementsByClassName('submit-btn')
//     const form = document.getElementsByClassName('fedback')
//     const sForm = document.getElementsByClassName('sumbit-form')
//     sBtn.addEventListener('click', () =>{
//         sForm.style.display='block';
//         form.style.display='none';
// });
// }

document.querySelector('.submit-btn').addEventListener('click',function(event){
    event.preventDefault();
    // Hide the feedback form
    document.querySelector('.feedback_form').style.display='none';
    // Show the thank you message
    document.querySelector('.sumbit-form').style.display='block';
});
document.querySelector('.ok-btn').addEventListener('click', function () {
    // Hide the thank you message
    document.querySelector('.sumbit-form').style.display = 'none';

    // Optionally, you could reset the form here
    document.querySelector('.feedback').reset();

    // Show the feedback form again if needed
    document.querySelector('.feedback_form').style.display = 'block';
});