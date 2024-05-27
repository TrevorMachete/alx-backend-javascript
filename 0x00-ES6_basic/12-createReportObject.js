export default function getSanFranciscoDescription() {
  const sanFrancisco = {
    city: 'San Francisco',
    country: 'US',
    name: {
      firstName: 'San',
      lastName: 'Francisco',
    },
  };

  const { city, country } = sanFrancisco;

  return city === 'San Francisco' && country === 'US';
}
