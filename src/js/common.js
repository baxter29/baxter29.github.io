$(document).ready(function(){

	
var typed = new Typed(".element", {
  strings: ["руддщ",
          "Hello!<br> I'm Sasha.<br> I'm front-end developer <br>Welcome to my site :)"
  ] ,
  typeSpeed: 40,
  showCursor: false,
});

$(window).resize(function() {
  if(document.documentElement.clientWidth < 764) {
    //this will execute on page load(to be more specific when document ready event occurs)
if ($('.portfolio__item').length > 3) {
  $('.portfolio__item:gt(2)').hide();
  $('.show_more').show();
}

$('.show_more').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.portfolio__item:gt(2)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show more' ? $(this).text('Show less') : $(this).text('Show more');
});
  }
  else {
     $('.portfolio__item:gt(2)').show();
     $('.show_more').hide();
  }
});


$(window).resize(function() {
  if(document.documentElement.clientWidth < 764) {
    //this will execute on page load(to be more specific when document ready event occurs)
if ($('.skills-content').length > 3) {
  $('.skills-content:gt(2)').hide();
  $('.show_skills').show();
}

$('.show_skills').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.skills-content:gt(2)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show more' ? $(this).text('Show less') : $(this).text('Show more');
});
  }
  else {
     $('.skills-content:gt(2)').show();
     $('.show_more').hide();
  }
});


})