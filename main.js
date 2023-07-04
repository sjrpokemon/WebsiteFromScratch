const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});



document.querySelector('.icon-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = this.getAttribute('href'); // Redirect to the link URL
  });


  document.querySelector('.icon-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = this.getAttribute('href'); // Redirect to the link URL
  });


  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  
  // Add event listener for mouseover
  canvas.addEventListener("mouseover", startGame);
  
  // Game initialization function
  function startGame() {
      // Remove the event listener to prevent multiple game starts
      canvas.removeEventListener("mouseover", startGame);
      
      const gameContainer = document.getElementById('game-container');
      initializeGame(gameContainer);
  }
  










