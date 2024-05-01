 $(document).ready(function(){

  $('.slider-text').slick({
    dots:true,
    infinite:false,
    arrows:false,
    slidesToShow:1

  });

 

  if(window.matchMedia('(max-width:767.98px)').matches) {
    $(".navbar-toggle").click(function(){
      console.log("fdg");
      $(this).toggleClass("open");
      $(".nav").toggleClass("show");
      ;
    })
  }  
});