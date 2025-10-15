const time = document.querySelector("#time");

setInterval(() => {
  const now = new Date().toLocaleTimeString();
  time.innerHTML = now;
}, 1000);
