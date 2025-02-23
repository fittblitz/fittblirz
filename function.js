const imgslide = document.querySelectorAll("#img-content");
let currentIndex = 0;

function nextslide(){
    imgslide[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % imgslide.length;
    imgslide[currentIndex].classList.add("active");
}

setInterval(nextslide, 3000);


const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const menuContent = document.getElementById("menu-content");
openNav.addEventListener('click', function(){
menuContent.style.height = '100%';
});

closeNav.addEventListener('click', function(){
menuContent.style.height = '0';
});