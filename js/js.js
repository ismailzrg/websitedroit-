
function show (){
  var e = document.getElementById("items1");
   var svg = document.querySelector("#li1 a svg");
    e.classList.remove("hidden");
}

/*function show2 (){
  var e = document.getElementById("items2");
  var svg = document.querySelector("#li2 a svg");
  if(e.className=="hidden"){
    e.classList.remove("hidden");
    svg.style.transform = "rotate(180deg)";
  }
  else{
    e.classList.add("hidden");
  }
  
  

}

function show3 (){
  var e = document.getElementById("items3");

    e.classList.remove("hidden");


}*/



var userMenuDiv = document.getElementById("userMenu");
var userMenu = document.getElementById("userButton");

var helpMenuDiv = document.getElementById("menu-content");
var helpMenu = document.getElementById("menu-toggle");

document.onclick = check;

function check(e){
 var target = (e && e.target) || (event && event.srcElement);

 //User Menu
 if (!checkParent(target, userMenuDiv)) {
   // click NOT on the menu
   if (checkParent(target, userMenu)) {
     // click on the link
     if (userMenuDiv.classList.contains("invisible")) {
       userMenuDiv.classList.remove("invisible");
     } else {userMenuDiv.classList.add("invisible");}
   } else {
     // click both outside link and outside menu, hide menu
     userMenuDiv.classList.add("invisible");
   }
 }

  //Help Menu
  if (!checkParent(target, helpMenuDiv)) {
   // click NOT on the menu
   if (checkParent(target, helpMenu)) {
     // click on the link
     if (helpMenuDiv.classList.contains("hidden")) {
       helpMenuDiv.classList.remove("hidden");
     } else {helpMenuDiv.classList.add("hidden");}
   } else {
     // click both outside link and outside menu, hide menu
     helpMenuDiv.classList.add("hidden");
   }
  }

}

function checkParent(t, elm) {
 while(t.parentNode) {
   if( t == elm ) {return true;}
   t = t.parentNode;
 }
 return false;
}



/* http://jsfiddle.net/LwLBx/ */

// Cache selectors
var lastId,
topMenu = $("#menu-content"),
topMenuHeight = topMenu.outerHeight()+175,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
$('html, body').stop().animate({ 
  scrollTop: offsetTop
}, 300);
if (!helpMenuDiv.classList.contains("hidden")) {
    helpMenuDiv.classList.add("hidden");
  }
e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
// Get container scroll position
var fromTop = $(this).scrollTop()+topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function(){
 if ($(this).offset().top < fromTop)
   return this;
});
// Get the id of the current element
cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
   lastId = id;
   // Set/remove active class
   menuItems
     .parent().removeClass("font-bold border-yellow-600")
     .end().filter("[href='#"+id+"']").parent().addClass("font-bold border-yellow-600");
}                   
});