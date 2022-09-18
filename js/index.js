function fadein(id,no){
  var b=$(window).scrollTop()
  // console.log(b)
  if(b>no){
    $(id).fadeIn();
  }
  $(window).scroll(function () {
    var c=$(window).height(); 
    var a=$(document).scrollTop()
    // console.log(a)
    if(a>no){
      $(id).fadeIn(2500);
    }
  }); 
}

$(document).ready(function(){
  $("body").addClass("body");
    var  winHeight = window.screen.height;
    $(".jumbotron").css({"height":winHeight+"px"})
    $("#logo").fadeIn(2000);
    $("#nav").click(function(){
    $(".navLong").slideToggle("slow");
    });
  });

  function divHeight(_widthAndPercent,divId){
    let Id =document.getElementById(divId)
    let Id1 =document.getElementById("girlPhoto1")
    console.log(Id1);
    let winWidth = Id.offsetWidth;
    console.log(winWidth);
    if(winWidth>890){
      console.log(winWidth);
      Id1.style.height ="365px";
    }else{
      let divHeight = winWidth/_widthAndPercent;
      Id.style.height = divHeight+"px";
    }

  }