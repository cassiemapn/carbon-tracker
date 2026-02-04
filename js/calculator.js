function calculateCarbon(data) {
  return (
    data.transport * EMISSIONS.transportPerKm +
    data.food * EMISSIONS.meal +
    data.energy * EMISSIONS.energyPerKwh
  );
}
