let feedData = [
	{
		image : 'img/songs/Cashcurt.png',
		h3 : 'Surreal soulja 2',
		h4 : 'Cashcurt',
		class : 'music',
		id: '0'
	},
	{
		image : 'img/songs/Beez.png',
		h3 : '645AR - Workin ft. 10kDug...',
		h4 : 'Beez Exclusivez',
		class : 'music',
		id: '1'
	},
	{
		image : 'img/videos/Final_battle.png',
		h3 : 'Final battle: Issei VS Hong<br> 10 Red Bull BC One..',
		h4 : '48:23',
		class : 'video',
		id: '2'
	},
	{
		image : 'img/events/King.png',
		h3 : 'King or queen of the <br>circle 2018 ',
		h4 : 'Houston, United States  <br>13 October',
		class : 'event',
		id: '3'
	},
	{
		image : 'img/songs/kaisoundz.png',
		h3 : 'kai$oundz & Lil Gucci Le...',
		h4 : 'kai$oundz',
		class : 'music',
		id: '4'
	},
	{
		image : 'img/songs/Cashcurt.png',
		h3 : 'Surreal soulja 2',
		h4 : 'Cashcurt',
		class : 'music',
		id: '5'
	},
	{
		image : 'img/videos/Final_battle_2.png',
		h3 : 'Final battle: Issei VS Hong<br> 10 Red Bull BC One..',
		h4 : '48:23',
		class : 'video',
		id: '6'
	}
]

let mapEvents = [
	{
		image : 'img/events/King.png',
		h3 : 'King or queen of the <br>circle 2018 ',
		h4 : 'Houston, United States  <br>13 October',
		class : 'event',
		id: '0'
	},
	{
		image : 'img/events/Anniversary.png',
		h3 : 'Temple rock: 5 year <br>anniversary 2018',
		h4 : 'Buenos Aires, Argentina <br>13 October',
		class : 'event',
		id: '1'
	},
	{
		image : 'img/events/Soul.png',
		h3 : 'Soul Rockerz 20',
		h4 : 'Buenos Aires, Argentina <br>13 October',
		class : 'event',
		id: '2'
	},
	{
		image : 'img/events/Rockland.png',
		h3 : "Rockland's 10 year <br>hip-hop showcase",
		h4 : 'Buenos Aires, Argentina <br>13 October',
		class : 'event',
		id: '3'
	}
]

function _createFeed(objData = [], classToInsertIn) {
		let feedElement = []

		objData.map( function(item,index) {

		feedElement[index] = document.createElement('div')
		feedElement[index].classList.add('feed__item-container')
		feedElement[index].setAttribute("id", item.id)

		feedElement[index].insertAdjacentHTML('afterbegin', `
				<div class="feed__bookmark-container" data-key="${index}">
					<img src="img/bookmarked_icon.png" alt="">
				</div>
				<div class="feed__${item.class}-item feed__item" data-key="${index}" data-opened="false">
					<div class="artwork" style="background-image: url(${item.image})"></div>
					<div class="feed__${item.class}-item-info">
						<h3>${item.h3}</h3>
						<h4>${item.h4}</h4>
					</div>
					<img src="img/Vector.png" alt="bookmark" class="bookmarked">
				</div>
			`)
		document.querySelector('.' + classToInsertIn).appendChild(feedElement[index])
	})

}
