var xCoordinates = "41.505493"
var yCoordinates = "-81.681290"
const getInfoCoordinates = `https://api.weather.gov/points/${xCoordinates},${yCoordinates}`
const cleveForecast = "https://api.weather.gov/gridpoints/CLE/83,65/forecast"


const getWeather = async (url) => {
    let response = await fetch(url).catch(err => console.log(err));
    let data = await response.json();
    // console.log(data.properties.periods);
    console.log(data);
}



getWeather(getInfoCoordinates);