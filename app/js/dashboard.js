window.addEventListener('load', function() {


  let isMobil;
  if (window.matchMedia("(min-width: 750px)").matches) {
    isMobil=false;
  } else {
    isMobil=true;
  }

  let body= document.querySelector("body");

  /// animation header
  var div = document.querySelector(".main--scroll");
  var headerImgBox =document.querySelector(".header__img");
  //var headerMain =document.querySelector(".header__main");
  console.log("scroll test")

  document.addEventListener("scroll",function(){
    console.log("scroll")

    var rect = div.getBoundingClientRect();
    let y = rect.top;
    console.log(y)
    if(y>0){
      console.log(y);
      headerImgBox.style.height=y+"px";
      //headerMain.style.backgroundColor="transparent";
      if(y<50){
       // headerMain.style.backgroundColor="#EDE7F2";
      }
    } 
  })

  let wrapper= this.document.querySelector(".wrapper--flex");
  let navSlider= this.document.querySelectorAll(".nav--slider__element");
  let clickCounter=0;

  for (let i = 0; i < navSlider.length; i++) {
    navSlider[i].addEventListener("click",function(){
      for (let j = 0; j < navSlider.length; j++) {
        navSlider[j].className="nav--slider__element";
      }
      let selectedSlide=i;
      if(isMobil) {
        wrapper.style.transform="translateX("+selectedSlide*(-100)+"vw)";
      }else{
        wrapper.style.transform="translateX("+selectedSlide*(-750)+"px)";
      }
     
      navSlider[i].classList.add("nav--slider__element--active");
    })
  }

  
})


