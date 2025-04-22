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
