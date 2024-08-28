//variables
var image = document.getElementById("profile-picture");

//Event listeners for devices with mouse
image.addEventListener('mouseover', function () {
    image.src = "resources/pictures/Mosaic of Me.jpg";
})
image.addEventListener('mouseout', function () {
    image.src = "resources/pictures/thumbnail_IMG_8342.jpg";
})

// Event listeners for devices with touch
image.addEventListener('touchstart', function () {
    image.src = "resources/pictures/Iron Man MK 43 comic filter.JPG";
});

image.addEventListener('touchend', function () {
    image.src = "resources/pictures/thumbnail_IMG_8342.jpg";
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

//sort list part
function sortListByNameCodecademy() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("codecademy-list");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function sortListByNameUnity() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("unity-list");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}