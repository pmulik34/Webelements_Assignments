let countdownValue = 0;
let intervalId;
let isCountdownRunning = false;
let inputValue;

function startCountdown() {
  if (isCountdownRunning) {
    console.log("Countdown already started.");
    return;
  }

  if (!inputValue || inputValue <= 0) {
    inputValue = parseInt(prompt("Enter a numeric value greater than 0:"));

    if (!inputValue || inputValue <= 0) {
      alert(
        "Invalid input value. Please enter a numeric value greater than 0."
      );
      return;
    }
  }

  countdownValue = inputValue;
  document.getElementById("value").textContent = countdownValue;
  intervalId = setInterval(decreaseCountdown, 1000);
  isCountdownRunning = true;
}

function decreaseCountdown() {
  countdownValue--;

  if (countdownValue >= 0) {
    document.getElementById("value").textContent = countdownValue;
  } else {
    clearInterval(intervalId);
    intervalId = null;
    isCountdownRunning = false;
    console.log("Countdown finished.");
  }
}

function stopCountdown() {
  clearInterval(intervalId);
  intervalId = null;
  isCountdownRunning = false;
  console.log("Countdown stopped.");
}

function resetCountdown() {
  clearInterval(intervalId);
  intervalId = null;
  countdownValue = 0;
  inputValue = null;
  document.getElementById("value").textContent = countdownValue;
  console.log("Countdown reset.");
}
