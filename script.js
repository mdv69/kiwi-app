function updateClocks() {
  const maloZone = document.getElementById('malo-city').value;
  const alexZone = document.getElementById('alex-city').value;

  try {
    const maloTime = new Date().toLocaleTimeString('fr-FR', { timeZone: maloZone });
    document.getElementById('malo-time').textContent = `🕒 ${maloTime}`;
  } catch {
    document.getElementById('malo-time').textContent = "⛔ Erreur";
  }

  try {
    const alexTime = new Date().toLocaleTimeString('fr-FR', { timeZone: alexZone });
    document.getElementById('alex-time').textContent = `🕒 ${alexTime}`;
  } catch {
    document.getElementById('alex-time').textContent = "⛔ Erreur";
  }
}

setInterval(updateClocks, 1000);

function sendMood() {
  const emoji = document.getElementById('emoji').value || "😊";
  const note = document.getElementById('mood-note').value;
  document.getElementById('mood-output').innerHTML = `<p>Tu te sens ${emoji} ${note ? '– ' + note : ''}</p>`;
}

function saveJournal() {
  const entry = document.getElementById('journal').value;
  const date = new Date().toLocaleDateString();
  document.getElementById('journal-output').innerHTML = `<p><strong>${date}</strong>: ${entry}</p>`;
}

const rules = [
  "Dire bonjour et bonne nuit",
  "Appeler 3 fois par semaine",
  "Partager un moment fort de la journée"
];

function renderRules() {
  const list = document.getElementById("rules-list");
  list.innerHTML = "";
  rules.forEach((rule, index) => {
    list.innerHTML += `<li>${rule} <button onclick="removeRule(${index})">❌</button></li>`;
  });
}

function addRule() {
  const rule = document.getElementById('new-rule').value;
  if (rule.trim()) {
    rules.push(rule);
    renderRules();
    document.getElementById('new-rule').value = "";
  }
}

function removeRule(index) {
  rules.splice(index, 1);
  renderRules();
}

renderRules();
updateClocks();
