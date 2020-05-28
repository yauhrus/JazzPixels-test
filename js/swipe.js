function swipeElements() {
    
let touchstartX = 0,
    touchstartY = 0,
    touchendX = 0,
    touchendY = 0,
    touchDiffX = 0,
    touchDiffY = 0,
    minSwipePath = 50,
    minAllowedTime = 200,
    maxAllowedTime = 500,
    startTime = 0,
    spentTime = 0


let swipeItems = document.querySelectorAll('.feed__item')

    for(let i = 0; i < swipeItems.length; i++) {

        swipeItems[i].addEventListener('touchstart', function(event) {

        touchstartX = event.changedTouches[0].screenX
        touchstartY = event.changedTouches[0].screenY
        startTime = new Date().getTime()

        }, false)

        swipeItems[i].addEventListener('touchend', function(event) {

            spentTime = new Date().getTime() - startTime
            touchendX = event.changedTouches[0].screenX
            touchendY = event.changedTouches[0].screenY
            let thisItem = this
            handleGesture(thisItem, spentTime)

        }, false); 
    }


    function handleGesture(thisItem, spentTime) {
        touchDiffX = touchendX - touchstartX
        touchDiffY = touchendY - touchstartY

        let feedItemContainerId = thisItem.getAttribute('data-key')
        let feedItemContainer = document.getElementById(feedItemContainerId)
        let bookmark = feedItemContainer.getElementsByClassName("feed__bookmark-container")[0]

        bookmark.onclick = function() {
            feedItemContainerId = bookmark.dataset.key
            let bookmarkForClosedTab = feedItemContainer.getElementsByClassName("bookmarked")[0]

            if(this.classList.contains('active') 
               && bookmarkForClosedTab.classList.contains('active')) {
               
               bookmarkForClosedTab.classList.remove('active')
               this.classList.remove('active')
            }
            else {
                bookmarkForClosedTab.classList.add('active')
                this.classList.add('active')
            }
        }

        if (touchDiffX >= minSwipePath 
            && spentTime >= minAllowedTime 
            && spentTime <= maxAllowedTime) {

            thisItem.dataset.opened = true
            bookmark.style.transform = 'translateX(0)'
            thisItem.style.transform = 'translateX(0)'
            //right
        }

        if (touchDiffX <= -minSwipePath 
            && spentTime >= minAllowedTime
            && spentTime <= maxAllowedTime 
            && thisItem.dataset.opened) {

            bookmark.style.transform = 'translateX(-128px)'
            thisItem.style.transform = 'translateX(-128px)'
            thisItem.dataset.opened = false
            //left
        }
        
        if (touchDiffY == 0 && thisItem.dataset.opened) {

            bookmark.style.transform = 'translateX(-128px)'
            thisItem.style.transform = 'translateX(-128px)'
            thisItem.dataset.opened = false
            //touch
        }
    }
}
