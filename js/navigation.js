$(document).ready(function(){

	$('.navigation__item a').on('click', function(e) {
		e.preventDefault()
		$(this).toggleClass('current')
		if($(this).next('a')[0]) {
			$(this).next('a').toggleClass('current')
		}
		else {
			$(this).prev('a').toggleClass('current')
		}
		
	})
})