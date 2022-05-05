$(document).ready(function(){
	// 대관공간 선택 (모바일)
	$('ul#space-list').bxSlider({
		mode: 'horizontal',
		auto: false,
		pager:false,
		prevText:'',
		nextText:'',
		prevSelector:'.mobile-select-space-btn.left-btn',
		nextSelector:'.mobile-select-space-btn.right-btn',
	});


  // 대관신청 예약 페이지

  // 달력 - 날짜 선택
  $('table#rent-calendar td button').on('click', function(e){
    if($(this).parents('td').hasClass('not-this-month')) {
      e.preventDefault();
    } else if($(this).parents('td').hasClass('passed-day')) {
      e.preventDefault();
      alert('지난 날짜는 예약하실 수 없습니다.');
    } else if($(this).parents('td').hasClass('today')) {
      e.preventDefault();
      alert('당일 예약은 공간 운영자에게 문의바랍니다.');
    } else if($(this).parents('td').hasClass('full')) {
      e.preventDefault();
      alert('에약이 가득 찼습니다.');
    } else if(!$(this).parents('td').hasClass('selected')) {
      if($('table#rent-calendar td').hasClass('selected')) {
        e.preventDefault();
        $('table#rent-calendar td').removeClass('selected');
        $(this).parents('td').addClass('selected');
      } else if(!$('table#rent-calendar td').hasClass('selected')) {
        e.preventDefault();
        $(this).parents('td').addClass('selected');
      }
    } else if($(this).parents('td').hasClass('selected')) {
      e.preventDefault();
      $(this).parents('td').removeClass('selected');
    };
  });
  // 시간 선택
  
})
