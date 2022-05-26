const hamburger=document.querySelector(".hamburger");
const navbarmenusu=document.querySelector(".navbarmenusu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarmenusu.classList.toggle("active");
})