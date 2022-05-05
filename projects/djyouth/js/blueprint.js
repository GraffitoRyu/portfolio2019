$(document).ready(function(){
	// 정보페이지에서 설계도 공간 클릭 시, 각 섹션으로 이동
	$('.inct-sub-contents.rest button.available').on('click',function(e){
		e.preventDefault();

		var sectionHash = $(this).attr('go-to-section');
		var	sectionPosition = $(sectionHash).offset().top - 151;
		$('html, body').stop().animate({scrollTop: sectionPosition}, 800);
	});

	// 층수 선택
	$('ul#level-tabmenu li button.level-tab-btn').on('click',function(e){
		e.preventDefault();
		var btnIndex = $(this).parents('li').index();
		$(this).parents('li').addClass('on');
		$(this).parents('li').siblings().removeClass('on');
		if(btnIndex == 0) {
			$('.blueprint').eq(0).addClass('active');
			$('.blueprint').eq(0).siblings().removeClass('active');
		} else if(btnIndex == 1) {
			$('.blueprint').eq(1).addClass('active');
			$('.blueprint').eq(1).siblings().removeClass('active');

		}
	})
});
