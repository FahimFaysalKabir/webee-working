$(document).ready(function(){
  // sticky menu
  $(".js--sticky-menu").waypoint(function(direction){
    if(direction=="down"){
        $(".nav").addClass("sticky");
    }
    else{
        $(".nav").removeClass("sticky");
    }
  });
});
// mobile menu
function openNav(){
  document.getElementById("myNav").style.width="100%";
}
function closeNav(){
  document.getElementById("myNav").style.width="0%";
}
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
	  autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
