$(window).scroll(function() {
    if ($(document).scrollTop() > 0){
      $('.navbar').addClass("scrolled");
    }else{
      $('.navbar').removeClass("scrolled");
  
    }
  });