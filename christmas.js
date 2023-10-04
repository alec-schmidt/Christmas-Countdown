// Function to calculate the countdown to Christmas
function countdownToChristmas() {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date for Christmas
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

  // Check if Christmas has already passed this year
  if (currentDate > christmasDate) {
    christmasDate.setFullYear(currentDate.getFullYear() + 1);
  }

  // Calculate the time remaining in milliseconds
  const timeRemaining = christmasDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the HTML element
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `Countdown to Christmas: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call the countdown function to initialize it
countdownToChristmas();

// Update the countdown every second
setInterval(countdownToChristmas, 1000);
