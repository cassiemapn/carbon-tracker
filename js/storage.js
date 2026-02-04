function getEntries() {
  return JSON.parse(localStorage.getItem("entries")) || [];
}

function saveEntry(entry) {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));
}
