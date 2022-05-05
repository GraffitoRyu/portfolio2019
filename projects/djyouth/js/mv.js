$(document).ready(function(){
  // 메인비주얼 슬라이드
  $('ul#mv-list').bxSlider({
    mode: 'fade',
    infiniteLoop: true,
    auto: true,
    pause: 3000,
    pager: true,
    pagerCustom: '#mv-pager',
    controls: false,
  });

  // 청춘지원 배너
  $('ul#mv-banner-slide').bxSlider({
    mode: 'horizontal',
    auto: true,
    pause:3000,
    pager: false,
    prevText: '',
    nextText: '',
    prevSelector: '#banner-prev',
    nextSelector: '#banner-next',
    autoControls: true,
    startText: '',
    stopText: '',
    autoControlsCombine: true,
    autoControlsSelector: '#banner-pause',
  });
});
