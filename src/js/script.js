$(document).ready(function()
{
	
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


function scrollActive()
{
		var scro= $(window).scrollTop();            
        var scr=0; 		// home
        var scr2= $(".biography").offset().top; 	// About Me
        var scr3=$(".portfolio-section").offset().top;	// Portfolio
        var scr4=$(".footer").offset().top;	// Contact details
        var scr5= 3500	// начало меню контакты
/*      положение  скрола относительно пункта Студия    */
    if ( $(window).scrollTop() >= scr && scro <= scr2 ) {
    	console.log($(".footer").scrollTop().top);
    	$('#m1').addClass('active__item');}
     else $('#m1').removeClass('active__item');
/*      положение  скрола относительно пункта Услуги   */
  if ( scro > scr2 && scro <= scr3 ) { 	$('#m2').addClass('active__item');}
     else $('#m2').removeClass('active__item');
/*      положение  скрола относительно пункта Дизайнеры   */
    if ( scro > scr3 && scro <= scr4 ) {   	$('#m3').addClass('active__item');}
     else $('#m3').removeClass('active__item');

/*      положение  скрола относительно пункта Портфолио  */
  if ( scro > scr4) {   	$('#m4').addClass('active__item');}
     else $('#m4').removeClass('active__item');



      if ( $(window).scrollTop() >= scr && scro <= scr2 ) {
    	console.log($(".footer").scrollTop().top);
    	$('#mob1').addClass('active__item');}
     else $('#mob1').removeClass('active__item');
/*      положение  скрола относительно пункта Услуги   */
  if ( scro > scr2 && scro <= scr3 ) { 	$('#mob2').addClass('active__item');}
     else $('#mob2').removeClass('active__item');
/*      положение  скрола относительно пункта Дизайнеры   */
    if ( scro > scr3 && scro <= scr4 ) {   	$('#mob3').addClass('active__item');}
     else $('#mob3').removeClass('active__item');

/*      положение  скрола относительно пункта Портфолио  */
  if ( scro > scr4) {   	$('#mob4').addClass('active__item');}
     else $('#mob4').removeClass('active__item');

// /*      положение  скрола относительно пункта Контакты  */
//   if ( scro > scr5 ) { $('#m5').addClass('active__item');}
//      else $('#m5').removeClass('active__item');


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



scrollTop('#m1' , '.slider');

scrollTop('#mob1' , '.slider');
	
scrollTop('#m2' , '.biography');

scrollTop('#mob2' , '.biography');
	
scrollTop('#m3' , '.portfolio-section');

scrollTop('#mob3' , '.portfolio-section');
	
scrollTop('#m4' , '.footer');
scrollTop('#mob4' , '.footer');

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
		$('.header__nav-mobile').slideDown();
		burger_flag = 1;
	}
	else
	{
		$('.header__nav-mobile').slideUp();
		burger_flag = 0;
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


 $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });