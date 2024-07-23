//variables
var image = document.getElementById("profile-picture");

//Event listeners for devices with mouse
image.addEventListener('mouseover', function()
{
  image.src ="resources/pictures/Iron Man MK 43 comic filter.JPG";
})
image.addEventListener('mouseout', function()
{
    image.src ="resources/pictures/thumbnail_IMG_8342.jpg";
})

// Event listeners for devices with touch
image.addEventListener('touchstart', function()
{
    image.src ="resources/pictures/Iron Man MK 43 comic filter.JPG";
  });
  
  image.addEventListener('touchend', function()
  {
    image.src ="resources/pictures/thumbnail_IMG_8342.jpg";
  });

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225)
  {
    document.getElementById("navbar").style.top = "0";
  } 
  else
  {
    document.getElementById("navbar").style.top = "-50px";
  }
}