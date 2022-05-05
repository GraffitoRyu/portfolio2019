$(document).ready(function(){
	$('#space-slider').bxSlider({
		mode:'horizontal',
		auto:true,
		pause:3000,
		pager:false,
		prevText:'',
		nextText:'',
		prevSelector:'#space-info-left',
		nextSelector:'#space-info-right',
	});
	$('.trip ul#thumb-slider').bxSlider({
		mode:'fade',
		auto:true,
		pause:3000,
		pager:false,
		controls:false,
	});
});

var resizedInfoSlide = null;
$(window).resize(function(){
	clearTimeout(resizedInfoSlide);
	resizedInfoSlide = setTimeout(resizedSlideDone, 50);
});

function resizedSlideDone() {
	$('#space-slider').bxSlider({
		mode:'horizontal',
		auto:true,
		pause:3000,
		pager:false,
		prevText:'',
		nextText:'',
		prevSelector:'#space-info-left',
		nextSelector:'#space-info-right',
	});
	$('.trip ul#thumb-slider').bxSlider({
		mode:'fade',
		auto:true,
		pause:3000,
		pager:false,
		controls:false,
	});
}