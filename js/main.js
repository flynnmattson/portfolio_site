window.onload = function(){
  var background = document.getElementById("background"),
      aspectRatio = 0.5625, // 16:9 Aspect Ratio
      screenWidth = 0,
      screenHeight = 0;

  adjustBorder();

  $(".textbox").fadeTo(6000, 1.0, function(){
    hintFade(0.0);
  });

  $(window).resize(function() {
    adjustBorder();
  });

  function adjustBorder(){
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    if((screenWidth * aspectRatio) > screenHeight){ // Too much width
      var extraWidth = (screenWidth - (screenHeight / aspectRatio)) / 2;
      background.style.marginLeft = extraWidth+1 + "px";
      background.style.marginRight = extraWidth+1 + "px";
    }else{
      background.style.marginLeft = "0px";
      background.style.marginRight = "0px";
    }

    if((screenWidth * aspectRatio) < screenHeight){ // Too much height
      var extraHeight = (screenHeight - (screenWidth * aspectRatio)) / 2;
      background.style.marginTop = extraHeight + "px";
    }else{
      background.style.marginTop = "0px";
    }
  }
};

function hintFade(trans){
  $(".hint").fadeTo(2000, trans, function(){
    hintFade(trans === 0.0 ? 1.0 : 0.0);
  });
}
