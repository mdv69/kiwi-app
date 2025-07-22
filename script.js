function updateTime(id, tz) {
  const now = new Date().toLocaleString("en-US", { timeZone: tz });
  const date = new Date(now);
  document.getElementById(id + "-time").textContent = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById(id + "-date").textContent = date.toDateString();
  document.getElementById(id + "-tz").textContent = tz;
}

// Update clocks every second
setInterval(() => {
  updateTime("local", "America/New_York");
  updateTime("partner", "Europe/London");
}, 1000);
