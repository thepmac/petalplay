function getRandomColor() {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class "flower"
    var flowerElements = document.querySelectorAll('.flower');

    // Update colors every half second
    setInterval(function() {
      // Loop through each flower element and set a new random text color
      flowerElements.forEach(function(flower) {
        flower.style.color = getRandomColor();
      });
    }, 500); // 500 milliseconds (half second)
  });