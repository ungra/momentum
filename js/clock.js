const clock = document.querySelector("#clock");

function getClock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
