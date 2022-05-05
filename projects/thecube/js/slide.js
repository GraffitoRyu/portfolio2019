$(document).ready(function(){
  $('ul#feature-slider').bxSlider({
    mode: 'fade',
    auto: true,
    pause: 3000,
    pagerCustom: '#phone-pager',
    controls: false,
  });

  $('ul#app-summary-slider').bxSlider({
    mode:'horizontal',
    auto:false,
    pagerCustom: '#app-summary-pager',
    prevText:'',
    nextText:'',
    prevSelector:'.app-summary-prev',
    nextSelector:'.app-summary-next',
  });


  // 화면 너비에 따른 슬라이드 변화
  // 1. 1920px 이상 (와이드 16:9 화면)
  // 2. 1920px 미만 1200px 이상 (16:9 화면)
  // 3. 1200px 미만 1024px 이상 (4:3 화면) & 1024px 미만 768px 이상 (태블릿 화면)
  // 4. 768px 미만 320px 이상 (모바일 화면)
  if($(window).width() >= 1900) {
    $('ul#preview-slide').bxSlider({
      mode:'horizontal',
      infiniteLoop: true,
      auto:true,
      pager:false,
      maxSlides: 4,
      prevText:'',
      nextText:'',
      prevSelector: '.preview-prev',
      nextSelector: '.preview-next',
    });
  } else if($(window).width() < 1900 && $(window).width() >= 1200) {
    $('ul#preview-slide').bxSlider({
      mode:'horizontal',
      infiniteLoop: true,
      auto:true,
      pager:false,
      maxSlides: 3,
      prevText:'',
      nextText:'',
      prevSelector: '.preview-prev',
      nextSelector: '.preview-next',
    });
  } else if($(window).width() < 1200 && $(window).width() >= 768) {
    $('ul#preview-slide').bxSlider({
      mode:'horizontal',
      infiniteLoop: true,
      auto:true,
      pager:false,
      maxSlides: 2,
      prevText:'',
      nextText:'',
      prevSelector: '.preview-prev',
      nextSelector: '.preview-next',
    });
  } else if($(window).width() < 768) {
    $('ul#preview-slide').bxSlider({
      mode:'horizontal',
      infiniteLoop: true,
      auto:true,
      pager:false,
      maxSlides: 1,
      prevText:'',
      nextText:'',
      prevSelector: '.preview-prev',
      nextSelector: '.preview-next',
    });
  }

  var resizePreview = null;
  $(window).resize(function(){
    clearTimeout(resizePreview);
    resizePreview = setTimeout(resizePreviewDone, 50);
  });
  function resizePreviewDone() {
    if($(window).width() >= 1900) {
      $('ul#preview-slide').bxSlider({
        mode:'horizontal',
        infiniteLoop: true,
        auto:true,
        pager:false,
        maxSlides: 4,
        prevText:'',
        nextText:'',
        prevSelector: '.preview-prev',
        nextSelector: '.preview-next',
      });
    } else if($(window).width() < 1900 && $(window).width() >= 1200) {
      $('ul#preview-slide').bxSlider({
        mode:'horizontal',
        infiniteLoop: true,
        auto:true,
        pager:false,
        maxSlides: 3,
        prevText:'',
        nextText:'',
        prevSelector: '.preview-prev',
        nextSelector: '.preview-next',
      });
    } else if($(window).width() < 1200 && $(window).width() >= 768) {
      $('ul#preview-slide').bxSlider({
        mode:'horizontal',
        infiniteLoop: true,
        auto:true,
        pager:false,
        maxSlides: 2,
        prevText:'',
        nextText:'',
        prevSelector: '.preview-prev',
        nextSelector: '.preview-next',
      });
    } else if($(window).width() < 768) {
      $('ul#preview-slide').bxSlider({
        mode:'horizontal',
        infiniteLoop: true,
        auto:true,
        pager:false,
        prevText:'',
        nextText:'',
        prevSelector: '.preview-prev',
        nextSelector: '.preview-next',
      });
    }
  }
});
