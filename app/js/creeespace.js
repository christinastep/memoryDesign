window.addEventListener('load', function() {

  let isMobil;
  if (window.matchMedia("(min-width: 750px)").matches) {
    isMobil=false;
  } else {
    isMobil=true;
  }

  let body= document.querySelector("body");
  let wrapper= this.document.querySelector(".wrapper--flex");
  let nextButton = document.querySelector(".button--next");
  let clickCounter=0;
  nextButton.addEventListener("click",function(){
    console.log("click")
  
    if (clickCounter<5) {
      clickCounter=clickCounter+1;
      if(isMobil) {
        wrapper.style.transform="translateX("+clickCounter*(-100)+"vw)";
      }else{
        wrapper.style.transform="translateX("+clickCounter*(-750)+"px)";
      }
      
      
      if(clickCounter===5){
        nextButton.innerHTML='<a href="back.html">Revenir au Dashboard ( Proto -> Back)</a>'
      }
    } 
    // else if(clickCounter===5){
    //   nextButton.innerHTML="Back"
    // }
  })
})