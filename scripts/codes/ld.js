$(document).ready(function() {
	
	var scrollLink = $('.rolly');

	// Smooth Scrolling
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000 );
	});

	// Active link switching
	$(window).scroll(function() {

		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function() {

			var sectionOffset = $(this.hash).offset().top - 20;

			if ( sectionOffset <= scrollbarLocation ) {
				$(this).parent().addClass('acfive');
			    $(this).parent().siblings().removeClass('acfive');	
			}
		});

	});

	var rollTop = $('#sctop');

	// Click hover hide
	rollTop.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: 0
		}, 2000 );
	});


	$(document).scroll(function(e) {

		var rollTophid = $(this).scrollTop();

			if ( rollTophid < 115 ) {
				$('#sctop').addClass('leungit');	
			} else {
			    $('#sctop').removeClass('leungit');
			}
	});


});