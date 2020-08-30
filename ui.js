class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(info, state) {
    const { responseData } = info;

    this.location.textContent = `${responseData.name}, ${state.toUpperCase()}`;
    this.desc.textContent = responseData.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    this.string.textContent = `${responseData.main.temp} \xB0\F`;
    this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${responseData.weather[0].icon}.png`);
    this.humidity.innerHTML = `<span class="w-detail-name">Humidity:</span> ${responseData.main.humidity}%`;
    this.feelsLike.innerHTML = `<span class="w-detail-name">Feels Like:</span> ${responseData.main.feels_like} \xB0\F`;
    this.wind.innerHTML = `<span class="w-detail-name">Wind:</span> ${responseData.wind.speed} mph`;
  }
}