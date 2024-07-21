//variables
var image = document.getElementById("profile-picture");

//Event listeners for devices with mouse
image.addEventListener('mouseover', function()
{
  image.src ="C:/Coding Projects/PortfolioProject/resources/pictures/Iron Man MK 43 comic filter.JPG";
})
image.addEventListener('mouseout', function()
{
    image.src ="C:/Coding Projects/PortfolioProject/resources/pictures/thumbnail_IMG_8342.jpg";
})

// Event listeners for devices with touch
image.addEventListener('touchstart', function() {
    image.src = "C:/Coding Projects/PortfolioProject/resources/pictures/Iron Man MK 43 comic filter.JPG";
  });
  
  image.addEventListener('touchend', function() {
    image.src = "C:/Coding Projects/PortfolioProject/resources/pictures/thumbnail_IMG_8342.jpg";
  });