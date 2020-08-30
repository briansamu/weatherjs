class Weather {
  constructor(city, state) {
    this.apiKey = '445424e79208bd8df66986bc32944493';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},US&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();

    return {
      responseData
    }

  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}