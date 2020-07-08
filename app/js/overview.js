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
  var headerMain =document.querySelector(".header--main");
  var navSlider=this.document.querySelector(".nav--slider");
  console.log("scroll test")

  document.addEventListener("scroll",function(){
    console.log("scroll")

    var rect = div.getBoundingClientRect();
    let y = rect.top;
    console.log(y)
    if(y>0){
      console.log(y);
      headerImgBox.style.height=y+"px";
     
      if(y<45){}
    } 
  })



  
})


