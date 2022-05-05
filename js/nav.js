$(document).ready(function(){

  $('body').stop().animate({opacity:1}, 800);

  $('#gnb .gnb-btn').on('click',function(e){
    e.preventDefault();
    if(!$('#gnb').is('.open')) {
      $('#gnb').addClass('open');
      $('#gnb .gnb-btn span.center').stop().animate({backgroundColor: 'transparent'}, 300);
      if($('.sub-contents').is('.contents-on') && $(window).width() >= 1200) {
        $('#gnb .gnb-btn span.before').stop().delay(0).animate({backgroundColor: '#ffffff'}, 300);
        $('#gnb .gnb-btn span.center').stop().delay(0).animate({backgroundColor: 'transparent'}, 300);
        $('#gnb .gnb-btn span.after').stop().delay(0).animate({backgroundColor: '#ffffff'}, 300);
      }
    } else {
      $('#gnb').removeClass('open');
      $('#gnb .gnb-btn span.center').stop().delay(200).animate({backgroundColor: '#ffffff'}, 300);
      if($('.sub-contents').is('.contents-on') && $(window).width() >= 1200) {
        $('#gnb .gnb-btn span.before').stop().delay(200).animate({backgroundColor: '#333333'}, 300);
        $('#gnb .gnb-btn span.center').stop().delay(200).animate({backgroundColor: '#333333'}, 300);
        $('#gnb .gnb-btn span.after').stop().delay(200).animate({backgroundColor: '#333333'}, 300);
      }
    }
  });
})
