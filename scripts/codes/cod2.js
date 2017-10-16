// Click Animated
$(function () {

    var anirubberBand = 'animated rubberBand';
	var anishake = 'animated shake';
	var aniEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

	$('#sctop').on('click',function() {
		$('#sctop').addClass(anirubberBand).one(aniEnd,function() {
			$(this).removeClass(anirubberBand);
		});
	});
});

// SCroll try

function animate(element, animation){
	$(element).addClass('animated '+animation);
	var wait = setTimeout(function() {
		$(element).removeClass('animated '+animation);
	}, 1000 );
}