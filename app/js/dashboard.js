window.addEventListener('load', function() {

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

  
})


