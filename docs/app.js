async function main() {
  async function handleScheduleBtn(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:3000";
    const formData = new FormData(document.querySelector("#schedule-form"));
    const text = formData.get("text");

    console.log("버튼눌림");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const jsonData = await response.json();
    document.querySelector("#box").textContent = JSON.stringify(jsonData);
  }

  document
    .querySelector("#schedule-form")
    .addEventListener("submit", handleScheduleBtn);
}

document.addEventListener("DOMContentLoaded", main);
