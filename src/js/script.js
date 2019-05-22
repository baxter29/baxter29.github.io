$(document).ready(function()
{

    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
	
function scrollTop(clickElem , scrollElem)
{
	$(clickElem).on('click',function()
{
	$('html, body').animate({scrollTop: $(scrollElem).offset().top} , 500);
})
}
	
function fixedNav()
{
		console.log($('.header').offset().top);
	if($(window).scrollTop() >= $scrollDate)
	{
		$('.header').addClass('fixed').fadeIn('fast');
	}
	else
	{
		$('.header').removeClass('fixed').fadeIn('fast');
	}
}

$(".up-button").fadeOut();
function scrollActive()
{
		var scro= $(window).scrollTop();            
        var scr=0; 		// home
        var scr2= $(".biography").offset().top; 	// About Me



   if(scro > scr2)
   		$(".up-button").fadeIn();
   	else
   		$(".up-button").fadeOut();	  
    };
scrollTop('.transition__btn','.header');


$scrollDate = $('.header').offset().top;


$('.header').removeClass('fixed');
$(window).scroll(function()
{
	 fixedNav();

	 scrollActive();


	
	 
	
})






scrollTop('.m1' , '.slider');

scrollTop('.mob1' , '.slider');
	
scrollTop('.m2' , '.biography');

scrollTop('.mob2' , '.biography');
	
scrollTop('.m3' , '.portfolio-section');

scrollTop('.mob3' , '.portfolio-section');
	
scrollTop('.m4' , '.footer');
scrollTop('.mob4' , '.footer');

scrollTop('.up-button' , '.slider');

	 // if($('.header').offset().top > 800)
	 // 	$(".item__link[data-link='3']").addClass("active__item");

	 	




// // scrolling 
function scrollTop(clickElem , scrollElem)
{
	$(clickElem).on('click',function()
{
	$('html, body').animate({scrollTop: $(scrollElem).offset().top} , 300);
})
}
	



let burger_flag = 0;
$('.header__burger-menu').on('click',function()
{
  
	if(burger_flag == 0)
	{
		$('.header__nav-mobile').slideDown().css({'box-shadow' : '0 0 5px #fff'});
		burger_flag = 1;
		$(".header__burger-menu span:nth-child(2n)").css({'margin': '5px 0' , 'height' : '2px'});
		$(".header__burger-menu span").css({'box-shadow': '0 0 5px #fff'});
	}
	else
	{
		$('.header__nav-mobile').slideUp().css({'box-shadow' : '0 0 0 #fff'});
		burger_flag = 0;
		$(".header__burger-menu span:nth-child(2n)").css({'margin': '2px 0'  , 'height' : '3px'});
		$(".header__burger-menu span").css({'box-shadow': '0 0 0 #fff'});
	}
	
})


$(".more_btn").on("click",function () {
	if(portfolio_switch == 0) {
	
			$(".hidden-portfolios").slideDown();
			portfolio_switch = 1;

	}
	else {
		$(".hidden-portfolios").slideUp();
			portfolio_switch = 0;
	}

})

/// Прогресc скилов 
$(window).on('scroll', function(){
  let sc = $(window).scrollTop();
      sc1 = 1300;
      sc2 = 2100;
  if( $(window).scrollTop() >= 800){
    (function ( $ ) {
      $.fn.progress = function() {
        var percent = this.data("percent");
        this.css("width", percent+"%");
      };
    }
    ($));
    
      $(".html .bar").progress();
       $(".css .bar").progress();
      $(".sass .bar").progress();
      $(".wordpress .bar").progress();
      $(".photoshop .bar").progress();
      $(".jQuery .bar").progress();
      $(".javascript .bar").progress();
      $(".php .bar").progress();
      $(".avocode .bar").progress();
      $(".gulp .bar").progress();
       $(".vuejs .bar").progress();

     
    
    
  }
  
});

})


 








$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
		$(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
		    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
						slider = $('#slider').offset().top, // This variable finds the distance between .section-one and the top. Replace .section-one with the ID of your section.
						bio = $('#bio').offset().top; // This variable finds the distance between .section-two and the top. Replace .section-two with the ID of your section. You can duplicate this for as many sections as you want.
						portfolio = $('#portfolio').offset().top;
						footer = $('#footer').offset().top - 850;

		    if (Scroll >= slider) { // If you have scrolled past section one do this.
		        $(".m1").addClass("active__item");
		       
		    } 
		    else { // If you have not scrolled section one do this.
		        $(".m1").removeClass("active__item"); 
		    }
			if (Scroll >= bio) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".m2").addClass("active__item"); 
		        $(".m1").removeClass("active__item"); 
				
		    } 
		    else { // If you have not scrolled section two do this.
		        $(".m2").removeClass("active__item");
		    }
		    if (Scroll >= portfolio) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".m3").addClass("active__item"); 
		        $(".m2").removeClass("active__item");
				
		    } 
		    else { // If you have not scrolled section two do this.
		        $(".m3").removeClass("active__item");
		    }
		    if (Scroll >= footer) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".m4").addClass("active__item");
		        $(".m3").removeClass("active__item"); 
				
		    } 
		    else { // If you have not scrolled section two do this.
		        $(".m4").removeClass("active__item");
		    }
		});
});
