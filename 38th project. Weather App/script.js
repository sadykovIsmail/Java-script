const showWeather = async (city) => {
    getWeather(city)
    }
    const getWeather = async (city) => {
    try {
        const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        const data = await res.json();
        return data; // return the fetched weather data directly
    } catch (error) {
        console.log(error);
    }
    };
    
    
    console.log(getWeather('New York'))