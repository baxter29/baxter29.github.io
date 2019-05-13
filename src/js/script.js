$(document).ready(function()
{
	// берем массив всех слайдов
	const slide = $('.slide')
	// массив всех 'пулек'
	const bullets = $('.slider-bullet')
	// тот слайд который нужно отобразить
	let active = 0;

	let header= $('.header').offset().top;

	let portfolio = $('.portfolio-section').offset().top;

	let biography = $('.biography').offset().top;

	

	let link_home =  $(".item__link[data-link='0']");

	let link_portfolio = $(".item__link[data-link='1']");

	let link_biography = $(".item__link[data-link='2']");

	let link_contact = $(".item__link[data-link='3']");

	changeSlide();

  
bullets.on("click",function(e)
{
	e.preventDefault();
	active = $(this).index();
	changeSlide();
})  
    

    function changeSlide() 
    {
    	/* скрыть все слайды по умолчанию */
		slide.fadeOut();
    	slide.eq(active).fadeIn(); 
    	
    	// если слайд равен 0 = показать
	
		bullets.removeClass('active');
		bullets.eq(active).addClass('active'); 
    }


 $('.btn__prev').on('click', function(e){
        active++;
        if(active == slide.length) {
            active = 0;
        }
        changeSlide();
    });


 $('.btn__next').on('click', function(e){
        if(active == 0) {
            active = slide.length;
        }
        active--;
        changeSlide();
    });

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
        var scr=0; 		// начало страницы меню студия
        var scr2=604; 	// начало меню услуги
        var scr3=1170;	// начало меню дизайнеры
        var scr4=1470;	// начало меню работы
        var scr5=4073;	// начало меню контакты
/*      положение  скрола относительно пункта Студия    */
    if ( $(window).scrollTop() >= scr && scro <= scr2 ) {	$('#m1').addClass('active__item');}
     else $('#m1').removeClass('active__item');
/*      положение  скрола относительно пункта Услуги   */
  if ( scro > scr2 && scro <= scr3 ) { 	$('#m2').addClass('active__item');}
     else $('#m2').removeClass('active__item');
/*      положение  скрола относительно пункта Дизайнеры   */
    if ( scro > scr3 && scro <= scr4 ) {   	$('#m3').addClass('active__item');}
     else $('#m3').removeClass('active__item');

/*      положение  скрола относительно пункта Портфолио  */
  if ( scro > scr4 && scro <= scr5 ) {   	$('#m4').addClass('active__item');}
     else $('#m4').removeClass('active__item');

/*      положение  скрола относительно пункта Контакты  */
  if ( scro > scr5 ) { $('#m5').addClass('active__item');}
     else $('#m5').removeClass('active__item');


   if(scro > scr2)
   		$(".up-button").fadeIn();
   	else
   		$(".up-button").fadeOut();	  
    };

scrollTop('.transition__btn','.header');


$scrollDate = $('.header').offset().top;
console.log($scrollDate + "scroll");

$('.header').removeClass('fixed');
$(window).scroll(function()
{
	 fixedNav();

	 scrollActive();


	
	 
	
})



scrollTop('#m1' , '.slider');

scrollTop('#mob1' , '.slider');
	
scrollTop('#m2' , '.portfolio-section');

scrollTop('#mob2' , '.portfolio-section');
	
scrollTop('#m3' , '.biography');

scrollTop('#mob3' , '.biography');
	
scrollTop('#m4' , '.contact-page');
scrollTop('#mob4' , '.contact-page');

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


$(".contact__button").on("click" , function()
{
	alert("Not working at the moment");
})

portfolio_switch = 0;

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
