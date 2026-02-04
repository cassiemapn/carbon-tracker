document.getElementById("logForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    transport: Number(document.getElementById("transport").value || 0),
    food: Number(document.getElementById("food").value || 0),
    energy: Number(document.getElementById("energy").value || 0)
  };

  const total = calculateCarbon(data);

  saveEntry({
    date: new Date().toDateString(),
    ...data,
    total
  });

  window.location.href = "index.html";
});
