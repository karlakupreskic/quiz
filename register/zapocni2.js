async function startGame() {
  const response = await fetch(
    "https://quiz-be-zeta.vercel.app/game/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}


function timer() {
    let timeLeft = 30;
    const timerEl = document.getElementsByClassName("timer");
  
    const countdown = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        timerEl.textContent = "gotovo";
      }
    }, 1000);
  }
  timer();