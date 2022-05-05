$(document).ready(function(){
  window.addEventListener('wheel', function(e) {

    if (e.deltaY < 0) {
      // 위로 스크롤 했을 때
      // console.log('scrolling up');
      if($('.sub-contents').is('.contents-on') && $('.contents-box').scrollTop() == 0) {
        if($(window).width() >= 1200) {
          $('#gnb .gnb-btn span.before').stop().delay(1300).animate({backgroundColor: '#ffffff'}, 300);
          $('#gnb .gnb-btn span.center').stop().delay(1300).animate({backgroundColor: '#ffffff'}, 300);
          $('#gnb .gnb-btn span.after').stop().delay(1300).animate({backgroundColor: '#ffffff'}, 300);
        }
        $('.sub-contents').removeClass('contents-on');
        $('#gnb .gnb-btn').removeClass('sub-contents-on');
      }
    }
    if (e.deltaY > 0) {
      // 아래로 스크롤 했을 때
      // console.log('scrolling down');
      if(!$('.sub-contents').is('.contents-on')) {
        if($(window).width() >= 1200) {
          $('#gnb .gnb-btn span.before').stop().delay(800).animate({backgroundColor: '#333333'}, 300);
          $('#gnb .gnb-btn span.center').stop().delay(800).animate({backgroundColor: '#333333'}, 300);
          $('#gnb .gnb-btn span.after').stop().delay(800).animate({backgroundColor: '#333333'}, 300);
        }
        $('.sub-contents').addClass('contents-on');
        $('#gnb .gnb-btn').addClass('sub-contents-on');
      }
    }
  });
})
