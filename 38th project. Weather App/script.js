const showWeather = async (city) => {
  try {
    const { weather: [w] = [], main = {}, wind = {}, name } =
      await getWeather(city);

    document.getElementById('weather-main').textContent = w?.main ?? 'N/A';
    document.getElementById('weather-icon').src = w?.icon ?? '';
    document.getElementById('main-temperature').textContent =
      main.temp ?? 'N/A';
    document.getElementById('feels-like').textContent =
      main.feels_like ?? 'N/A';
    document.getElementById('humidity').textContent =
      main.humidity ?? 'N/A';
    document.getElementById('wind').textContent =
      wind.speed ?? 'N/A';
    document.getElementById('wind-gust').textContent =
      wind.gust ?? 'N/A';
    document.getElementById('location').textContent =
      name ?? 'N/A';
  } catch {
    alert('Something went wrong, please try again later');
  }
};


const getWeather = async (city) => {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log(error);
  }
};
document.getElementById("get-forecast").addEventListener("click", () => {
  const city = document.getElementById("city").value;  
  if (!city) return;
  showWeather(city);
});


