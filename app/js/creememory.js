window.addEventListener('load', function() {

  let body= document.querySelector("body");

  /// switch button
  console.log("Hello ich bin eine andere datei");
  //$('input.cb-value').prop("checked", true);
  let buttonContentSouvenir=document.querySelector(".wrapperButtons");
  let buttonSubmit=document.querySelector(".button--submit");
  let footer=document.querySelector(".footer")
  $('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
      footer.style.transform="translateY(0%)"
      

    } else {
      $(mainParent).removeClass('active');
        footer.style.transform="translateY(200%)"

      
    }

  })
  console.log("test");

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

  // 
  let boxAddTitel=document.querySelector(".souvenir__input--titel");
  let boxAddImage=document.querySelector(".inputGroup--image");
  let boxAddLink=document.querySelector(".inputGroup--link");
  let buttonAddTitel=document.querySelector(".button--ajoute--titel");
  let buttonAddImage=document.querySelector(".button--ajoute--image");
  let buttonAddLink=document.querySelector(".button--ajoute--link");

  buttonAddTitel.addEventListener("click",function(){
    buttonAddTitel.style.display="none";
    boxAddTitel.style.display="block";
  })
  buttonAddImage.addEventListener("click",function(){
    buttonAddImage.style.display="none";
    boxAddImage.style.display="block";
  })
  buttonAddLink.addEventListener("click",function(){
    buttonAddLink.style.display="none";
    boxAddLink.style.display="block";
  })
})


