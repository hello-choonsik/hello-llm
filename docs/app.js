async function main() {
  async function handleScheduleBtn() {
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }

  document
    .querySelector("#schedule-btn")
    .addEventListener("click", handleScheduleBtn);
}

document.addEventListener("DOMContentLoaded", main);
