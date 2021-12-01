$(window).scroll(function(){
    $('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 140);
});


 
$('back-top-a').hide();

$(window).scroll(function(){
  var scrollpos =$(this).scrollTop();
  $('#back-to-top').text(scrollpos).css('backgr','#fff');

  if(scrollpos >= 170){
    $('.navbar-default').addClass('navbar-fixed-top');

  }else{
    $('.navbar-default').removeClass('navbar-fixed-top');
  }if(scrollpos >= 270){
    $('#back-to-top-a').fadeIn('blend');
  }else{
    $('#back-to-top-a').fadeOut();
  }
});

$('#back-to-top-a').click(function(){
  $('html, body').animate({scrollTop:0}, 5000);
});
/* ================== search on navbar===================*/

$(document).ready(function() {
	$('[data-toggle=search-form]').click(function(){
		$('.search-form-wrapper').addClass('open');
		$('.search-form-wrapper .search').focus();
		$('html').toggleClass('search-form-open');
	});
	$('[data-toggle=search-form-close]').click(function(){
		$('.search-form-wrapper').removeClass('open');
		$('html').removeClass('search-form-open');
	});
	
	
	$('.search-close').click(function(){
		$('.search-form-wrapper').removeClass('open');
		$('html').removeClass('search-form-open');
	});
	
	$('#btn').click(function(){
		$('#show').toggleClass('open');
	});
	
});
/* ================== search on navbar End===================*/

/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	

/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.header_inner_bottom').addClass('fixed-menu');
		} else {
			$('.header_inner_bottom').removeClass('fixed-menu');
		}
	});

	AOS.init();

	// $(document).ready(function(){

	// 	$(window).scroll(function(){
	// 		if($(this).scrollTop() > 40){
	// 			$('#back').fadeIn();
	// 		} else{
	// 			$('#back').fadeOut();
	// 		}
	// 	});
	// });
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }