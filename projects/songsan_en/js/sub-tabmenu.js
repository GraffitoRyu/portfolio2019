$(document).ready(function(){
  $('ul#sub-tabmenu li button').on('click',function(e){
    e.preventDefault();
    var subSectionHash = $(this).attr('section-id');
    var subSectionTop = $(subSectionHash).offset().top - 100;
    $(this).parents('li').addClass('on');
    $(this).parents('li').siblings('li').removeClass('on');
    $('html, body').stop().animate({scrollTop : subSectionTop}, 800);
  })
});
