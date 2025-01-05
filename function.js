window.onscroll = function(){myFunction()};
function myFunction(){
  const nav = document.getElementById("headerid");
  if(document.documentElement.scrollTop > 50){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }
}