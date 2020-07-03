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
  let navSlider= this.document.querySelectorAll(".nav--slider__element");
  let clickCounter=0;

  let buttonOubliez=document.querySelector(".button--oubliez");

  let buttonOubliezMail=document.querySelector(".button--oubliez--mail");

  buttonOubliez.addEventListener("click",function(){
    if(isMobil) {
      wrapper.style.transform="translateX(-100vw)";
    }else{
      wrapper.style.transform="translateX(-750px)";
    }
  })

  buttonOubliezMail.addEventListener("click",function(){
    if(isMobil) {
      wrapper.style.transform="translateX(-200vw)";
    }else{
      wrapper.style.transform="translateX(-1500px)";
    }
  })


  // for (let i = 0; i < navSlider.length; i++) {
  //   navSlider[i].addEventListener("click",function(){
  //     for (let j = 0; j < navSlider.length; j++) {
  //       navSlider[j].className="nav--slider__element";
  //     }
  //     let selectedSlide=i;
  //     if(isMobil) {
  //       wrapper.style.transform="translateX("+selectedSlide*(-100)+"vw)";
  //     }else{
  //       wrapper.style.transform="translateX("+selectedSlide*(-750)+"px)";
  //     }
     
  //     navSlider[i].classList.add("nav--slider__element--active");
  //   })
  // }

})