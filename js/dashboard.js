const entries = getEntries();
const today = new Date().toDateString();

function sumBy(entries, key) {
  return entries.reduce((sum, e) => sum + (e[key] || 0), 0);
}

const todayEntries = entries.filter(e => e.date === today);
const weekEntries = entries.slice(-7);

const todayTotal = todayEntries.reduce((sum, e) => sum + e.total, 0);
const weekTotal = weekEntries.reduce((sum, e) => sum + e.total, 0);

document.getElementById("todayTotal").textContent = todayTotal.toFixed(2) + " kg CO₂e";
document.getElementById("weekTotal").textContent = weekTotal.toFixed(2) + " kg CO₂e";

// Optionally, show breakdowns by category (if you add elements to index.html)
if (document.getElementById("todayBreakdown")) {
  document.getElementById("todayBreakdown").innerHTML = `
    <ul>
      <li>Transport: ${(sumBy(todayEntries, "car_km") * EMISSIONS.transport.car.value + sumBy(todayEntries, "bus_km") * EMISSIONS.transport.bus.value + sumBy(todayEntries, "train_km") * EMISSIONS.transport.train.value + sumBy(todayEntries, "bike_km") * EMISSIONS.transport.bike.value + sumBy(todayEntries, "flight_short_km") * EMISSIONS.transport.flight_short.value + sumBy(todayEntries, "flight_long_km") * EMISSIONS.transport.flight_long.value).toFixed(2)} kg CO₂e</li>
      <li>Meals: ${(sumBy(todayEntries, "meat_meals") * EMISSIONS.meal.meat.value + sumBy(todayEntries, "vegetarian_meals") * EMISSIONS.meal.vegetarian.value + sumBy(todayEntries, "vegan_meals") * EMISSIONS.meal.vegan.value + sumBy(todayEntries, "fish_meals") * EMISSIONS.meal.fish.value).toFixed(2)} kg CO₂e</li>
      <li>Energy: ${(sumBy(todayEntries, "grid_kwh") * EMISSIONS.energy.grid.value + sumBy(todayEntries, "solar_kwh") * EMISSIONS.energy.solar.value + sumBy(todayEntries, "gas_kwh") * EMISSIONS.energy.gas.value).toFixed(2)} kg CO₂e</li>
      <li>Heating: ${(sumBy(todayEntries, "gas_therm") * EMISSIONS.heating.gas.value + sumBy(todayEntries, "oil_litre") * EMISSIONS.heating.oil.value + sumBy(todayEntries, "electric_heat_kwh") * EMISSIONS.heating.electric.value).toFixed(2)} kg CO₂e</li>
      <li>Waste: ${(sumBy(todayEntries, "landfill_kg") * EMISSIONS.waste.landfill.value + sumBy(todayEntries, "recycled_kg") * EMISSIONS.waste.recycled.value).toFixed(2)} kg CO₂e</li>
      <li>Water: ${(sumBy(todayEntries, "water_litre") * EMISSIONS.water.usage.value).toFixed(2)} kg CO₂e</li>
    </ul>
  `;
}
if (document.getElementById("weekBreakdown")) {
  document.getElementById("weekBreakdown").innerHTML = `
    <ul>
      <li>Transport: ${(sumBy(weekEntries, "car_km") * EMISSIONS.transport.car.value + sumBy(weekEntries, "bus_km") * EMISSIONS.transport.bus.value + sumBy(weekEntries, "train_km") * EMISSIONS.transport.train.value + sumBy(weekEntries, "bike_km") * EMISSIONS.transport.bike.value + sumBy(weekEntries, "flight_short_km") * EMISSIONS.transport.flight_short.value + sumBy(weekEntries, "flight_long_km") * EMISSIONS.transport.flight_long.value).toFixed(2)} kg CO₂e</li>
      <li>Meals: ${(sumBy(weekEntries, "meat_meals") * EMISSIONS.meal.meat.value + sumBy(weekEntries, "vegetarian_meals") * EMISSIONS.meal.vegetarian.value + sumBy(weekEntries, "vegan_meals") * EMISSIONS.meal.vegan.value + sumBy(weekEntries, "fish_meals") * EMISSIONS.meal.fish.value).toFixed(2)} kg CO₂e</li>
      <li>Energy: ${(sumBy(weekEntries, "grid_kwh") * EMISSIONS.energy.grid.value + sumBy(weekEntries, "solar_kwh") * EMISSIONS.energy.solar.value + sumBy(weekEntries, "gas_kwh") * EMISSIONS.energy.gas.value).toFixed(2)} kg CO₂e</li>
      <li>Heating: ${(sumBy(weekEntries, "gas_therm") * EMISSIONS.heating.gas.value + sumBy(weekEntries, "oil_litre") * EMISSIONS.heating.oil.value + sumBy(weekEntries, "electric_heat_kwh") * EMISSIONS.heating.electric.value).toFixed(2)} kg CO₂e</li>
      <li>Waste: ${(sumBy(weekEntries, "landfill_kg") * EMISSIONS.waste.landfill.value + sumBy(weekEntries, "recycled_kg") * EMISSIONS.waste.recycled.value).toFixed(2)} kg CO₂e</li>
      <li>Water: ${(sumBy(weekEntries, "water_litre") * EMISSIONS.water.usage.value).toFixed(2)} kg CO₂e</li>
    </ul>
  `;
}
