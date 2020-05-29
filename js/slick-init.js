let htmlContentForSliderBlock = [
	{	
		id: 0,
		markImage: '',
		markText: '',
		infoMainText: '16 <br>new <br>events',
		infoCommonText: 'Open map'
	},
	{	
		id: 1,
		markImage: 'img/icons/hottest.png',
		markText: 'Hottest',
		infoMainText: 'Temple<br>rock',
		infoCommonText: 'Show details'
	},
	{	
		id: 2,
		markImage: 'img/icons/Subtract.png',
		markText: 'Nearest',
		infoMainText: 'Drop the<br>beat 3',
		infoCommonText: 'Show details'
	},
	{	
		id: 3,
		markImage: 'img/icons/tyz.png',
		markText: 'Tour',
		infoMainText: 'Minsk - <br>Vilnius',
		infoCommonText: 'Show details'
	}

]


$(document).ready(function(){

	$('.activity__slider').slick({
		autoplay: false,
	    arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 700

	})

	$('.slick-list').css({
	  	'padding-right': ($('.activity').width() - 305)+ 'px'
	}) 
	  
	$( window ).resize(function() {
	  	$('.slick-list').css({
	  	'padding-right': ($('.activity').width() - 305) + 'px'
	  	}) 
	})

	$('.activity__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  	let currentSlideNumber = $('.activity__slider').slick('slickCurrentSlide')
	  	let nextSlideNumber = nextSlide

	  	if(currentSlideNumber != nextSlideNumber) {

	  		setTimeout(function(nextSlide) {

	  		for(let i = 0; i < htmlContentForSliderBlock.length; i++) {

	  			if(htmlContentForSliderBlock[i].id == nextSlideNumber) {

	  				$('.activity__mark img').attr('src', htmlContentForSliderBlock[i].markImage)
	  				$('.activity__mark h3').html(htmlContentForSliderBlock[i].markText)
	  				$('.activity__info h1').html(htmlContentForSliderBlock[i].infoMainText)
	  				$('.activity__info a').html(htmlContentForSliderBlock[i].infoCommonText)

	  				if( nextSlideNumber == 0) {
	  					$('.activity__info h1').css({
	  						'font-size': '60px',
	  						'line-height': '50px',
	  						'font-family': 'Uni neue'
	  					})

	  					$('.activity__mark img').css({
	  						'opacity': 0
	  					})
	  					
	  					$('.activity__mark h3').css({
	  						'opacity': 0
	  					})
	  				}
	  				else {
	  					$('.activity__info h1').css({
	  						'font-size': '47px',
	  						'line-height': '40px',
	  						'font-family': 'SF Compact Display'
	  					})

	  					$('.activity__mark img').css({
	  						'opacity': 1
	  					})

	  					$('.activity__mark h3').css({
	  						'opacity': 1
	  					})
	  				}
	  			}
	  		}
	  		
	  	}, 250)
	  	}
	  	
	})

})
