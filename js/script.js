// mobile nav
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});

// hero slide animation
const track = document.querySelector(".hero-track");
const images = document.querySelectorAll(".hero-img");

let current = 0;

setInterval(() => {
    current++;
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = `translateX(-${current * 100}%)`;

    // when it gets to the duplicate image
    if (current === images.length - 1) {
    setTimeout(() => {
        track.style.transition = "none"; // remove animation
        track.style.transform = "translateX(0%)";
        current = 0;
    }, 1000); // match transition duration
    }
}, 4000);

//click to enlarge menu image
const menuImages = document.querySelectorAll(".menu-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

menuImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});