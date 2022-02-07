const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}));