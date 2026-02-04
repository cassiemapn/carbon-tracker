const entries = getEntries();
const today = new Date().toDateString();

const todayTotal = entries
  .filter(e => e.date === today)
  .reduce((sum, e) => sum + e.total, 0);

document.getElementById("todayTotal").textContent =
  todayTotal.toFixed(2) + " kg CO₂e";

const weekTotal = entries
  .slice(-7)
  .reduce((sum, e) => sum + e.total, 0);

document.getElementById("weekTotal").textContent =
  weekTotal.toFixed(2) + " kg CO₂e";
