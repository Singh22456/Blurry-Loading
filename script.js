

function blurring() {
  const bg = document.getElementById('image');
  const loadPercentage = document.getElementById('loadPercentage');

  let load = 0;
  let int = setInterval(() => {
    load++;
    if (load > 100) {
      clearInterval(int);
      loadPercentage.style.display = 'none'; // Hide the load percentage when it reaches 100%
    }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`;
    loadPercentage.textContent = `${load}%`; // Update the percentage dynamically
  }, 30);
}

// Rest of your existing code...



const scale = (num, in_min, in_max,out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const button = document.getElementById("blurButton");
button.addEventListener("click", blurring);

// Function to fetch a random image from Unsplash API
function fetchRandomImage() {
    fetch('https://source.unsplash.com/random/1600x900/?mountains')
        .then(response => {
            const imageUrl = response.url;
            const bg = document.getElementById('image');
            bg.src = imageUrl;
        })
        .catch(error => console.error('Error fetching image:', error));
}

// Call the function to fetch and display a random image from the Unsplash API
fetchRandomImage();

// Function to fetch a random image from Unsplash API when the page is reloaded
window.onload = function() {
    fetchRandomImage();
};
