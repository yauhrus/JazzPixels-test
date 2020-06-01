_createFeed(mapEvents, 'map__events-list')



let googleMap = document.querySelector('.map')
let mapContainer = document.querySelector('.map__container')
let eventsButton = document.querySelector('.map__events-button')
let eventsList = document.querySelector('.map__events-list')
let pageNavigation = document.querySelector('.navigation')
let eventsHider = document.querySelector('.map__events-hider')

eventsList.style.transform = 'translateY(' + (-eventsList.offsetHeight - mapContainer.offsetHeight) + 'px)'

googleMap.style.height = ( window.innerHeight - 48 ) + 'px'
mapContainer.style.height = ( window.innerHeight - 48 ) + 'px'

eventsButton.onclick = function() {
	eventsList.style.opacity = 1
	eventsList.style.transform = 'translateY(' + '-' + mapContainer.offsetHeight + 'px)'

	setTimeout(() => {
		pageNavigation.style.transform = 'translateY(' + (eventsList.offsetHeight - mapContainer.offsetHeight) + 'px)'
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		})
	}, 500)
}

eventsHider.onclick = function() {
	eventsList.style.transform = 'translateY(' + '-' + (mapContainer.offsetHeight + eventsList.offsetHeight) + 'px)'
	
	setTimeout(() => {
		pageNavigation.style.transform = 'translateY(0)'
	}, 500)
	}		

swipeElements()
