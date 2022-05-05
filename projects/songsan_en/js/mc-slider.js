$(document).ready(function(){
  $('ul#mc-slider').bxSlider({
    mode:'fade',
    auto: true,
    pause: 5000,
    prevText:'Previous',
    nextText:'Next',
    prevSelector: '#mc-2-controls .mc-2-prev',
    nextSelector: '#mc-2-controls .mc-2-next',
    pager: false
  })
})
