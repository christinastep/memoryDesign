window.addEventListener('load', function() {
  this.console.log(document.querySelectorAll('.boxPuzzel__souvenir'))
  

  if(!!window.IntersectionObserver){
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting){
        console.log(entry);
        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0px)";

        // headerMain.style.position="fixed";
        // headerMain.style.top="0px";
      }
      });
    }, {rootMargin: "0px 0px -30% 0px"});
    document.querySelectorAll('.boxPuzzel__souvenir').forEach(souvenir => { observer.observe(souvenir) });
  }
  
  else document.querySelector('#warning').style.display = 'block'; 
})

/// animation header
var main = document.querySelector("main");
var headerEspace =document.querySelector(".header--espace");

var buttonPartage = document.querySelector(".button--ajoute--momory");
let headerImage=document.querySelector(".espace__hero__image");
console.log("scroll test");

let rectheader=headerImage.getBoundingClientRect();
let rectheaderTop=rectheader.top;

document.addEventListener("scroll",function(){
  console.log("scroll");
  rectheaderTop
  //buttonPartage.style.display="none"
  var rect = main.getBoundingClientRect();
  let y = rect.top;
  if(y>0){
    console.log(y);
    console.log("whatt")
    headerEspace.style.height=y+"px"; 
    headerImage.style.transform="scale("+(y/300)+")";
    // //headerMain.style.backgroundColor="transparent";
    // if(y<50){
    //   //headerMain.style.backgroundColor="#EDE7F2";
    // }
  }
  
})

var commentButton=document.querySelectorAll(".souvenir__commentairLink")

var commentBox=document.querySelectorAll(".boxComments");

for (let i = 0; i < commentButton.length; i++) {
  commentButton[i].addEventListener("click",function(){
    commentBox[i].classList.toggle("open")
  })
  
}




