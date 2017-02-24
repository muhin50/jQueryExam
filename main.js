
  	$(document).ready(function(){
	  	var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});
 $('.parallax-window').parallax({imageSrc:'bg.jpg'});
    
});
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
//    autoplayHoverPause:true,

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
});
$("#bg_btn").click(function(){
    $(".box").css("background-color","red");
});
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

