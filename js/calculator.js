// Calculates total carbon emissions based on all supported data points
function calculateCarbon(data) {
  let total = 0;
  // Transport
  if (data.car_km) total += data.car_km * EMISSIONS.transport.car.value;
  if (data.bus_km) total += data.bus_km * EMISSIONS.transport.bus.value;
  if (data.train_km) total += data.train_km * EMISSIONS.transport.train.value;
  if (data.bike_km) total += data.bike_km * EMISSIONS.transport.bike.value;
  if (data.flight_short_km) total += data.flight_short_km * EMISSIONS.transport.flight_short.value;
  if (data.flight_long_km) total += data.flight_long_km * EMISSIONS.transport.flight_long.value;
  // Meals
  if (data.meat_meals) total += data.meat_meals * EMISSIONS.meal.meat.value;
  if (data.vegetarian_meals) total += data.vegetarian_meals * EMISSIONS.meal.vegetarian.value;
  if (data.vegan_meals) total += data.vegan_meals * EMISSIONS.meal.vegan.value;
  if (data.fish_meals) total += data.fish_meals * EMISSIONS.meal.fish.value;
  // Energy
  if (data.grid_kwh) total += data.grid_kwh * EMISSIONS.energy.grid.value;
  if (data.solar_kwh) total += data.solar_kwh * EMISSIONS.energy.solar.value;
  if (data.gas_kwh) total += data.gas_kwh * EMISSIONS.energy.gas.value;
  // Heating
  if (data.gas_therm) total += data.gas_therm * EMISSIONS.heating.gas.value;
  if (data.oil_litre) total += data.oil_litre * EMISSIONS.heating.oil.value;
  if (data.electric_heat_kwh) total += data.electric_heat_kwh * EMISSIONS.heating.electric.value;
  // Waste
  if (data.landfill_kg) total += data.landfill_kg * EMISSIONS.waste.landfill.value;
  if (data.recycled_kg) total += data.recycled_kg * EMISSIONS.waste.recycled.value;
  // Water
  if (data.water_litre) total += data.water_litre * EMISSIONS.water.usage.value;
  return total;
}
