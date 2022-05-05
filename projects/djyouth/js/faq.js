$(document).ready(function(){
	// FAQ 아코디언
	$('dl.faq-list dt').on('click', function(e){
		if(!$(this).hasClass('on')){
			e.preventDefault();
			$(this).siblings('dd').stop().slideToggle();
			$(this).addClass('on');
			$(this).siblings('dd').addClass('on');
			$(this).parents('dl.faq-list').siblings('dl.faq-list').children('dd').hide().removeAttr('style');
			$(this).parents('dl.faq-list').siblings('dl.faq-list').children('dt').removeClass('on');
			$(this).parents('dl.faq-list').siblings('dl.faq-list').children('dd').removeClass('on');
		} else if($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).siblings('dd').removeClass('on');
			$(this).siblings('dd').stop().slideToggle();
		}
	});
});