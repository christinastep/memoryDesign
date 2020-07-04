window.addEventListener('load', function() {

  console.log("test");

  /// animation header
  var div = document.querySelector(".main--scroll");
  var headerImgBox =document.querySelector(".header__img");
  var headerMain =document.querySelector(".header--main");
  console.log("scroll test")

  document.addEventListener("scroll",function(){
    console.log("scroll")

    var rect = div.getBoundingClientRect();
    let y = rect.top;
    console.log(y)
    if(y>0){
      console.log(y);
      headerImgBox.style.height=y+"px";
      headerMain.style.backgroundColor="transparent";
      if(y<45){
      headerMain.style.backgroundColor="#EDE7F2";
      }
    }
  })  

  var buttonImage= this.document.querySelector(".button--imageUpload")

  buttonImage.addEventListener("click",function(){
    buttonImage.innerHTML="<div class='imgWrapper'><img src='../images/pixelImages/profil@2x.jpg' /></div><div class='button--edit'></div>"
  })
})


