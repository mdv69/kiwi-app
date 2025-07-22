function updateClocks() {
  const timeYou = moment().tz("America/New_York").format("hh:mm:ss A");
  const timePartner = moment().tz("Europe/London").format("hh:mm:ss A");
  document.getElementById("time-you").textContent = timeYou;
  document.getElementById("time-partner").textContent = timePartner;
}
setInterval(updateClocks, 1000);
updateClocks();

document.getElementById("current-date").textContent = moment().format("dddd, MMMM D, YYYY");

function sendMood() {
  const note = document.getElementById("mood-note").value;
  alert("Mood sent!\n\n" + note);
  document.getElementById("mood-note").value = "";
}

function saveJournal() {
  const title = document.getElementById("journal-title").value;
  const text = document.getElementById("journal-text").value;
  alert("Journal saved!\n\n" + (title ? title + ": " : "") + text);
  document.getElementById("journal-title").value = "";
  document.getElementById("journal-text").value = "";
}

function addRule() {
  const input = document.getElementById("new-rule");
  const rule = input.value.trim();
  if (rule) {
    const li = document.createElement("li");
    li.textContent = rule;
    document.getElementById("rules-list").appendChild(li);
    input.value = "";
  }
}
