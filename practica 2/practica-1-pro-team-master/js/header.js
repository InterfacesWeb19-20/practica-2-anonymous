
$(document).ready(function(){

	$(window).scroll(function(){

		if( $(this).scrollTop() > 0 ){

			$('header').addClass('header2');
			$('section').addClass('espacioHeader');

		} else {

			$('header').removeClass('header2');
			$('section').removeClass('espacioHeader');
		}
	});

});