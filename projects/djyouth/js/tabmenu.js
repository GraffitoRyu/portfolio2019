$(document).ready(function(){
	// 대전청년정책 FAQ 탭메뉴
	$('.faq-tabmenu ul#sp-tabmenu-list li.tabmenu').on('click', function(e){
		e.preventDefault();
		var tabIndex = $(this).index();
		$(this).addClass('on');
		$(this).siblings('li.tabmenu').removeClass('on');
		if(tabIndex == 0) {
			$('#work0101-faq-1').addClass('on');
			$('#work0101-faq-1').siblings('.sc-item').removeClass('on');
		} else if(tabIndex == 1) {
			$('#work0101-faq-2').addClass('on');
			$('#work0101-faq-2').siblings('.sc-item').removeClass('on');
		} else if(tabIndex == 2) {
			$('#work0101-faq-3').addClass('on');
			$('#work0101-faq-3').siblings('.sc-item').removeClass('on');
		} else if(tabIndex == 3) {
			$('#work0101-faq-4').addClass('on');
			$('#work0101-faq-4').siblings('.sc-item').removeClass('on');
		} else if(tabIndex == 4) {
			$('#work0101-faq-5').addClass('on');
			$('#work0101-faq-5').siblings('.sc-item').removeClass('on');
		} else if(tabIndex == 5) {
			$('#work0101-faq-6').addClass('on');
			$('#work0101-faq-6').siblings('.sc-item').removeClass('on');
		}
	});
});