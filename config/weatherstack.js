const token = "";
const url = `http://api.weatherstack.com/current?access_key=${token}&query=`;

module.exports = {
	urlWeatherstack: url,
	token: token
};