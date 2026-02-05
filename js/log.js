document.getElementById("logForm").addEventListener("submit", e => {
  e.preventDefault();
  const get = id => Number(document.getElementById(id)?.value || 0);
  const data = {
    // Transport
    car_km: get("car_km"),
    bus_km: get("bus_km"),
    train_km: get("train_km"),
    bike_km: get("bike_km"),
    flight_short_km: get("flight_short_km"),
    flight_long_km: get("flight_long_km"),
    // Meals
    meat_meals: get("meat_meals"),
    vegetarian_meals: get("vegetarian_meals"),
    vegan_meals: get("vegan_meals"),
    fish_meals: get("fish_meals"),
    // Energy
    grid_kwh: get("grid_kwh"),
    solar_kwh: get("solar_kwh"),
    gas_kwh: get("gas_kwh"),
    // Heating
    gas_therm: get("gas_therm"),
    oil_litre: get("oil_litre"),
    electric_heat_kwh: get("electric_heat_kwh"),
    // Waste
    landfill_kg: get("landfill_kg"),
    recycled_kg: get("recycled_kg"),
    // Water
    water_litre: get("water_litre")
  };
  const total = calculateCarbon(data);
  saveEntry({
    date: new Date().toDateString(),
    ...data,
    total
  });
  window.location.href = "index.html";
});
