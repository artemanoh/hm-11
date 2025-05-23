let minutes = 59;
let seconds = 60;

const timerDisplay = document.querySelector(".timer");
const message = document.querySelector(".message");

const timerInterval = setInterval(() => {
  if (seconds === 0) {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds = 0;
    }
  } else {
    seconds--;
  }

  const formattedMin = String(minutes).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  timerDisplay.textContent = `${formattedMin}:${formattedSec}`;

  if (minutes === 29 && seconds === 59) {
    message.textContent = "Залишилось менше половини часу!";
  }
  if (minutes === 14 && seconds === 59) {
    message.textContent = "Залишилось 15 хвилин!";
  }
  if (minutes === 4 && seconds === 59) {
    message.textContent = "Залишилось 5 хвилин! Таймер скоро закінчиться🥳";
  }

  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    message.textContent =
      "Таймер закінчився,оновіть сайт, щоб його перезапустити.Дякую, що сиділи на сайті цілу годину😋";
  }
}, 1000);

/* Task 2 */
let remainingSeconds = 30;
let remainingMilliseconds = 0;

const displayTimer = document.querySelector(".millisecond-timer");
const animationBlock = document.querySelector(".animation");
const restartButton = document.querySelector(".restart");

let countdownInterval;

function startTimer() {
  remainingSeconds = 30;
  remainingMilliseconds = 0;
  animationBlock.style.display = "none";
  restartButton.disabled = true;

  countdownInterval = setInterval(() => {
    if (remainingMilliseconds === 0) {
      if (remainingSeconds === 0) {
        clearInterval(countdownInterval);
        displayTimer.textContent = "00.000";
        restartButton.disabled = false;
        return;
      } else {
        remainingSeconds--;
        remainingMilliseconds = 999;
      }
    } else {
      remainingMilliseconds -= 10;
      if (remainingMilliseconds < 0) remainingMilliseconds = 0;
    }

    const secondsFormatted = String(remainingSeconds).padStart(2, '0');
    const millisecondsFormatted = String(remainingMilliseconds).padStart(3, '0');
    displayTimer.textContent = `${secondsFormatted}.${millisecondsFormatted}`;

    if (remainingSeconds === 10 && remainingMilliseconds === 0) {
      animationBlock.style.display = "block";
    }
  }, 10);
}

startTimer();

restartButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  startTimer();
});
