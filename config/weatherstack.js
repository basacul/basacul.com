const url = "http://api.weatherstack.com/current?access_key=";
const token = "";

module.exports = {
	urlWeatherstack: url,
	token: process.env.WEATHERSTACK_TOKEN || token
};