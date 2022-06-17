window.addEventListener("scroll",function(){
    var header = document.getElementById("menu");
    header.classList.toggle("fixed", window.scrollY>220);
})