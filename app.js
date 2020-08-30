// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather(weatherLocation.state));

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  console.log(state);
  getWeather(state);

  // Close modal
  $('#locModal').modal('hide');
});

// weather.changeLocation('Miami', 'FL')

function getWeather(state) {
  weather.getWeather()
    .then(results => {
      ui.paint(results, state);
    })
    .catch(err => console.log(err));
}