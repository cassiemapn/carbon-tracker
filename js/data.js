const EMISSIONS = {
  transport: {
    car: { value: 0.21, unit: 'kg CO2e/km', source: 'DEFRA 2023' },
    bus: { value: 0.09, unit: 'kg CO2e/km', source: 'DEFRA 2023' },
    train: { value: 0.041, unit: 'kg CO2e/km', source: 'DEFRA 2023' },
    bike: { value: 0, unit: 'kg CO2e/km', source: 'N/A' },
    flight_short: { value: 0.156, unit: 'kg CO2e/km', source: 'DEFRA 2023' },
    flight_long: { value: 0.109, unit: 'kg CO2e/km', source: 'DEFRA 2023' }
  },
  meal: {
    meat: { value: 2.5, unit: 'kg CO2e/meal', source: 'Our World in Data' },
    vegetarian: { value: 1.1, unit: 'kg CO2e/meal', source: 'Our World in Data' },
    vegan: { value: 0.7, unit: 'kg CO2e/meal', source: 'Our World in Data' },
    fish: { value: 1.7, unit: 'kg CO2e/meal', source: 'Our World in Data' }
  },
  energy: {
    grid: { value: 0.233, unit: 'kg CO2e/kWh', source: 'IEA 2023' },
    solar: { value: 0.05, unit: 'kg CO2e/kWh', source: 'IEA 2023' },
    gas: { value: 0.184, unit: 'kg CO2e/kWh', source: 'IEA 2023' }
  },
  heating: {
    gas: { value: 2.1, unit: 'kg CO2e/therm', source: 'EPA 2023' },
    oil: { value: 2.68, unit: 'kg CO2e/litre', source: 'EPA 2023' },
    electric: { value: 0.233, unit: 'kg CO2e/kWh', source: 'IEA 2023' }
  },
  waste: {
    landfill: { value: 0.45, unit: 'kg CO2e/kg', source: 'EPA 2023' },
    recycled: { value: 0.05, unit: 'kg CO2e/kg', source: 'EPA 2023' }
  },
  water: {
    usage: { value: 0.000298, unit: 'kg CO2e/litre', source: 'Water UK 2023' }
  }
};
