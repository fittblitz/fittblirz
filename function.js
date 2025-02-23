const imgslide = document.querySelectorAll("#img-content");
let currentIndex = 0;

function nextslide(){
    imgslide[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % imgslide.length;
    imgslide[currentIndex].classList.add("active");
}

setInterval(nextslide, 3000);

const imgcontent = document.querySelectorAll("#img-head");
let currentIndex2 = 0;
function secondslide(){
    imgcontent[currentIndex2].classList.remove("active");
    currentIndex2 = (currentIndex2 + 1) % imgcontent.length;
    imgcontent[currentIndex2].classList.add("active");
}

setInterval(secondslide, 3000);

const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const menuContent = document.getElementById("menu-content");
openNav.addEventListener('click', function(){
menuContent.style.height = '100%';
});

closeNav.addEventListener('click', function(){
menuContent.style.height = '0';
});
